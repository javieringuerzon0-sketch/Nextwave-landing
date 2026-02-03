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

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // ID de tu lista en Brevo (cambiar después)
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de Brevo:', data);

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
    console.error('Error en newsletter:', error);
    return res.status(500).json({
      error: 'Error del servidor',
    });
  }
}
