import { describe, it, expect, vi, beforeEach } from 'vitest';
import { validateEnv } from '../validateEnv';

describe('validateEnv', () => {
  beforeEach(() => {
    // Reset environment before each test
    vi.unstubAllEnvs();
  });

  it('should pass validation with all required variables', () => {
    vi.stubEnv('VITE_SUPABASE_URL', 'https://test.supabase.co');
    vi.stubEnv('VITE_SUPABASE_ANON_KEY', 'test-key');

    expect(() => validateEnv()).not.toThrow();
  });

  it('should throw error when VITE_SUPABASE_URL is missing', () => {
    vi.stubEnv('VITE_SUPABASE_ANON_KEY', 'test-key');
    vi.unstubAllEnvs(); // Remove VITE_SUPABASE_URL

    expect(() => validateEnv()).toThrow(/VITE_SUPABASE_URL/);
  });

  it('should throw error when VITE_SUPABASE_ANON_KEY is missing', () => {
    vi.stubEnv('VITE_SUPABASE_URL', 'https://test.supabase.co');
    vi.unstubAllEnvs(); // Remove VITE_SUPABASE_ANON_KEY

    expect(() => validateEnv()).toThrow(/VITE_SUPABASE_ANON_KEY/);
  });

  it('should not throw when optional variables are missing', () => {
    vi.stubEnv('VITE_SUPABASE_URL', 'https://test.supabase.co');
    vi.stubEnv('VITE_SUPABASE_ANON_KEY', 'test-key');
    // VITE_SENTRY_DSN is optional

    expect(() => validateEnv()).not.toThrow();
  });
});
