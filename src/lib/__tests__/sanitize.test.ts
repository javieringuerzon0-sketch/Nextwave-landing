import { describe, it, expect } from 'vitest';
import { sanitizeInput, sanitizeFormData, isValidEmail, isValidPhone } from '../sanitize';

describe('sanitize utilities', () => {
  describe('sanitizeInput', () => {
    it('should remove HTML tags from input', () => {
      const dirty = '<script>alert("xss")</script>Hello';
      const clean = sanitizeInput(dirty);
      expect(clean).toBe('Hello');
    });

    it('should remove attributes from HTML', () => {
      const dirty = '<div onclick="alert(1)">Click me</div>';
      const clean = sanitizeInput(dirty);
      expect(clean).toBe('Click me');
    });

    it('should handle empty strings', () => {
      expect(sanitizeInput('')).toBe('');
    });

    it('should preserve plain text', () => {
      const text = 'Just plain text 123';
      expect(sanitizeInput(text)).toBe(text);
    });
  });

  describe('sanitizeFormData', () => {
    it('should sanitize all string values in object', () => {
      const dirty = {
        name: '<b>John</b>',
        email: 'test@example.com',
        message: '<script>alert(1)</script>Hello',
      };
      const clean = sanitizeFormData(dirty);
      expect(clean.name).toBe('John');
      expect(clean.email).toBe('test@example.com');
      expect(clean.message).toBe('Hello');
    });

    it('should preserve non-string values', () => {
      const data = {
        name: 'John',
        age: 25,
        active: true,
        meta: null,
      };
      const clean = sanitizeFormData(data);
      expect(clean.age).toBe(25);
      expect(clean.active).toBe(true);
      expect(clean.meta).toBeNull();
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true);
      expect(isValidEmail('valid_email@test-domain.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('test @example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should validate Mexican phone numbers', () => {
      expect(isValidPhone('5512345678')).toBe(true);
      expect(isValidPhone('612-289-3294')).toBe(true);
      expect(isValidPhone('(612) 289-3294')).toBe(true);
      expect(isValidPhone('+52 612 289 3294')).toBe(true);
    });

    it('should validate international phone numbers', () => {
      expect(isValidPhone('+1234567890')).toBe(true);
      expect(isValidPhone('+44 20 1234 5678')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidPhone('123')).toBe(false); // Too short
      expect(isValidPhone('abc123456789')).toBe(false); // Contains letters
      expect(isValidPhone('')).toBe(false); // Empty
    });
  });
});
