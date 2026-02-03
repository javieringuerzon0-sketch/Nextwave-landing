/**
 * Valida que todas las variables de entorno requeridas estén presentes
 * Falla rápidamente (fail-fast) si alguna variable crítica falta
 */

interface EnvVars {
  VITE_SUPABASE_URL?: string;
  VITE_SUPABASE_ANON_KEY?: string;
  VITE_SENTRY_DSN?: string;
}

export function validateEnv(): void {
  const env: EnvVars = {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
  };

  // Variables críticas (deben estar presentes)
  const required: (keyof EnvVars)[] = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'];

  // Variables opcionales (warning si no están)
  const optional: (keyof EnvVars)[] = ['VITE_SENTRY_DSN'];

  // Verificar variables requeridas
  const missingRequired = required.filter(key => !env[key] || env[key]!.trim() === '');

  if (missingRequired.length > 0) {
    const errorMsg = `
╔════════════════════════════════════════════════════════╗
║  ERROR: Variables de entorno faltantes                 ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  Las siguientes variables son REQUERIDAS:              ║
║  ${missingRequired.map(v => `- ${v}`).join('\n║  ')}
║                                                        ║
║  Por favor configúralas en tu archivo .env             ║
║  Usa .env.example como referencia                      ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
    `.trim();

    console.error(errorMsg);
    throw new Error(`Missing required environment variables: ${missingRequired.join(', ')}`);
  }

  // Verificar variables opcionales (solo warning)
  const missingOptional = optional.filter(key => !env[key] || env[key]!.trim() === '');

  if (missingOptional.length > 0 && import.meta.env.PROD) {
    console.warn(`
⚠️  ADVERTENCIA: Variables de entorno opcionales faltantes:
${missingOptional.map(v => `   - ${v}`).join('\n')}

Estas variables son opcionales pero recomendadas para producción.
    `);
  }

  // Log de confirmación en desarrollo
  if (import.meta.env.DEV) {
    console.log('✅ Variables de entorno validadas correctamente');
  }
}
