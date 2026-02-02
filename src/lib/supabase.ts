import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para la tabla project_inquiries
export interface ProjectInquiry {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  services: string[];
  goals: string[];
  details: string;
  metadata?: Record<string, unknown>;
}
