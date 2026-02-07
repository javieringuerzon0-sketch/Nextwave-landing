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
    console.error('Missing Stripe configuration');
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  const sig = req.headers['stripe-signature'];

  if (!sig) {
    console.error('No signature provided');
    return res.status(400).json({ error: 'No signature provided' });
  }

  let event: Stripe.Event;

  try {
    // Obtener el body raw
    const rawBody = await buffer(req);

    // Verificar la firma del webhook
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);

    console.log('✅ Webhook signature verified:', event.type);
  } catch (err: any) {
    console.error('⚠️ Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Manejar diferentes tipos de eventos
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('💳 Payment succeeded:', session.id);

        // Guardar en Supabase
        const { error: dbError } = await supabase.from('purchases').insert({
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

        if (dbError) {
          console.error('Error saving to database:', dbError);
          // No fallar el webhook si falla el DB
        } else {
          console.log('✅ Purchase saved to database');
        }

        // Aquí puedes agregar lógica adicional:
        // - Enviar email de confirmación con Brevo
        // - Activar servicios
        // - Notificar al equipo

        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('💳 Async payment succeeded:', session.id);

        // Actualizar estado en Supabase
        const { error: updateError } = await supabase
          .from('purchases')
          .update({ payment_status: 'paid', status: 'completed' })
          .eq('stripe_session_id', session.id);

        if (updateError) {
          console.error('Error updating payment status:', updateError);
        }

        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('❌ Async payment failed:', session.id);

        // Actualizar estado en Supabase
        const { error: updateError } = await supabase
          .from('purchases')
          .update({ payment_status: 'failed', status: 'failed' })
          .eq('stripe_session_id', session.id);

        if (updateError) {
          console.error('Error updating payment status:', updateError);
        }

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('✅ PaymentIntent succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('❌ PaymentIntent failed:', paymentIntent.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Responder a Stripe que recibimos el webhook
    res.status(200).json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
}
