import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Inicializar Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-01-28.clover',
});

// Inicializar Supabase
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || ''
);

// Buffer the request body for Stripe signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verificar que las variables de entorno estén configuradas
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).json({ error: 'No signature provided' });
  }

  let event: Stripe.Event;

  try {
    // Obtener el body raw
    const rawBody = await buffer(req);

    // Verificar la firma del webhook
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return res.status(400).json({ error: `Webhook Error: ${errorMessage}` });
  }

  // Manejar diferentes tipos de eventos
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Guardar en Supabase
        await supabase.from('purchases').insert({
          stripe_session_id: session.id,
          stripe_customer_id: session.customer as string,
          customer_email: session.customer_details?.email || null,
          customer_name: session.customer_details?.name || null,
          amount_total: session.amount_total,
          amount_subtotal: session.amount_subtotal,
          currency: session.currency,
          payment_status: session.payment_status,
          status: 'completed',
          metadata: session.metadata,
          created_at: new Date().toISOString(),
        });

        // Aquí puedes agregar lógica adicional:
        // - Enviar email de confirmación con Brevo
        // - Activar servicios
        // - Notificar al equipo

        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Actualizar estado en Supabase
        await supabase
          .from('purchases')
          .update({ payment_status: 'paid', status: 'completed' })
          .eq('stripe_session_id', session.id);

        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Actualizar estado en Supabase
        await supabase
          .from('purchases')
          .update({ payment_status: 'failed', status: 'failed' })
          .eq('stripe_session_id', session.id);

        break;
      }

      case 'payment_intent.succeeded': {
        break;
      }

      case 'payment_intent.payment_failed': {
        break;
      }

      default:
        // Evento no manejado
        break;
    }

    // Responder a Stripe que recibimos el webhook
    res.status(200).json({ received: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: 'Webhook handler failed: ' + errorMessage });
  }
}
