import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Create a Supabase client
export function createClient() {
  // Get the Supabase URL and anon key from environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }
  
  // Create and return the Supabase client
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

// Singleton client for client-side usage
let clientSingleton;

export function getClientSingleton() {
  if (clientSingleton) return clientSingleton;
  
  clientSingleton = createClient();
  return clientSingleton;
}

// For client-side operations
export const supabase = typeof window !== 'undefined' ? getClientSingleton() : null; 