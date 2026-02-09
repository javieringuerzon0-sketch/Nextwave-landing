import type { VercelRequest, VercelResponse } from '@vercel/node';
import { rateLimit, getIdentifier } from '../src/lib/rateLimit';

// Rate limiter: 5 requests por minuto por IP
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minuto
  uniqueTokenPerInterval: 500, // Max 500 IPs diferentes en el store
});

// Permitir CORS
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting: 5 requests por minuto
  try {
    const identifier = getIdentifier(req);
    await limiter.check(identifier, 5);
  } catch {
    return res.status(429).json({
      error: 'Demasiados intentos. Por favor espera un minuto antes de intentar de nuevo.',
    });
  }

  const { email } = req.body;

  // Validar email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    // Integración con Brevo (Sendinblue)
    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    // Si no hay API key, guardar en consola (modo desarrollo)
    if (!BREVO_API_KEY) {
      return res.status(200).json({
        success: true,
        message: 'Suscrito exitosamente (modo desarrollo)',
      });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [3], // ID de lista de Brevo: NextWave Newsletter
        updateEnabled: true,
      }),
    });

    let data;
    try {
      const text = await response.text();
      data = text ? JSON.parse(text) : {};
    } catch {
      return res.status(500).json({
        error: 'Respuesta inválida de Brevo. Verifica tu API key.',
      });
    }

    if (!response.ok) {
      // Si el contacto ya existe, considerarlo éxito
      if (data.code === 'duplicate_parameter') {
        return res.status(200).json({
          success: true,
          message: 'Ya estás suscrito',
        });
      }

      return res.status(response.status).json({
        error: data.message || 'Error al suscribir',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Suscrito exitosamente',
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return res.status(500).json({
      error: 'Error del servidor: ' + errorMessage,
    });
  }
}
