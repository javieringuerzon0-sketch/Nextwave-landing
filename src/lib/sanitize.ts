import DOMPurify from 'dompurify';

/**
 * Sanitiza un string para prevenir ataques XSS
 * @param dirty - String potencialmente peligroso
 * @returns String limpio y seguro
 */
export function sanitizeInput(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [], // No permitir ningún tag HTML
    ALLOWED_ATTR: [], // No permitir ningún atributo
    KEEP_CONTENT: true, // Mantener el contenido de texto
  });
}

/**
 * Sanitiza un objeto completo de datos de formulario
 * @param data - Objeto con datos del formulario
 * @returns Objeto con todos los valores sanitizados
 */
export function sanitizeFormData<T extends Record<string, unknown>>(data: T): T {
  const sanitized = {} as T;

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key as keyof T] = sanitizeInput(value) as T[keyof T];
    } else if (value === null || value === undefined) {
      sanitized[key as keyof T] = value as T[keyof T];
    } else {
      sanitized[key as keyof T] = value as T[keyof T];
    }
  }

  return sanitized;
}

/**
 * Valida un email con regex RFC 5322 simplificado
 * @param email - Email a validar
 * @returns true si el email es válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

/**
 * Valida un número de teléfono (formato mexicano o internacional)
 * @param phone - Número de teléfono
 * @returns true si el teléfono es válido
 */
export function isValidPhone(phone: string): boolean {
  // Eliminar espacios, guiones y paréntesis
  const cleaned = phone.replace(/[\s\-()]/g, '');

  // Validar que tenga entre 10 y 15 dígitos (puede incluir + al inicio)
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(cleaned);
}
