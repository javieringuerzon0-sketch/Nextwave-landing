/**
 * Rate limiting utility using in-memory store
 * Para producción, considerar usar Redis o Upstash
 */

interface RateLimitConfig {
  interval: number; // ms
  uniqueTokenPerInterval: number;
}

interface RateLimitStore {
  [key: string]: number[];
}

const store: RateLimitStore = {};

/**
 * Implementación simple de rate limiting en memoria
 * Limita requests por IP
 */
export function rateLimit(config: RateLimitConfig) {
  const { interval, uniqueTokenPerInterval } = config;

  return {
    check: async (identifier: string, limit: number): Promise<boolean> => {
      const now = Date.now();
      const windowStart = now - interval;

      // Inicializar o limpiar ventana de tiempo
      if (!store[identifier]) {
        store[identifier] = [];
      }

      // Filtrar requests fuera de la ventana de tiempo
      store[identifier] = store[identifier].filter(timestamp => timestamp > windowStart);

      // Verificar si excede el límite
      if (store[identifier].length >= limit) {
        throw new Error('Rate limit exceeded');
      }

      // Agregar timestamp actual
      store[identifier].push(now);

      // Limpiar store si crece demasiado
      const keys = Object.keys(store);
      if (keys.length > uniqueTokenPerInterval) {
        // Limpiar entradas antiguas
        keys.forEach(key => {
          if (store[key].every(timestamp => timestamp < windowStart)) {
            delete store[key];
          }
        });
      }

      return true;
    },
  };
}

/**
 * Obtiene un identificador único del request (IP o fallback)
 */
export function getIdentifier(req: any): string {
  // Intentar obtener IP real detrás de proxies
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded
    ? (forwarded as string).split(',')[0].trim()
    : req.socket?.remoteAddress || 'unknown';

  return ip;
}
