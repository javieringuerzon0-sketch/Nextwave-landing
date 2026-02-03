import type { VercelRequest, VercelResponse } from '@vercel/node';

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
      console.log('Newsletter signup (sin Brevo configurado):', email);
      return res.status(200).json({
        success: true,
        message: 'Suscrito exitosamente (modo desarrollo)',
      });
    }

    console.log('Intentando suscribir:', email, 'a lista #3');

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

    const data = await response.json();
    console.log('Respuesta de Brevo:', { status: response.status, data });

    if (!response.ok) {
      console.error('Error de Brevo:', {
        status: response.status,
        code: data.code,
        message: data.message,
      });

      // Si el contacto ya existe, considerarlo éxito
      if (data.code === 'duplicate_parameter') {
        console.log('Contacto duplicado, retornando éxito');
        return res.status(200).json({
          success: true,
          message: 'Ya estás suscrito',
        });
      }

      return res.status(response.status).json({
        error: data.message || 'Error al suscribir',
      });
    }

    console.log('Suscripción exitosa');
    return res.status(200).json({
      success: true,
      message: 'Suscrito exitosamente',
    });
  } catch (error: any) {
    console.error('Error en newsletter:', {
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({
      error: 'Error del servidor: ' + error.message,
    });
  }
}
