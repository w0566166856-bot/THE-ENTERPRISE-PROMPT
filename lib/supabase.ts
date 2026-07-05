import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

/**
 * Client-side Supabase instance — safe to use in client components.
 * Reads/writes go through Row Level Security policies tied to the
 * Clerk user id (see supabase/policies.sql for the expected setup).
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false }, // auth/session identity is owned by Clerk
});

/**
 * Server-side Supabase instance using the service role key.
 * Only import this inside Server Components, Route Handlers, or Server Actions.
 * NEVER import this file's `supabaseAdmin` export into a "use client" file.
 */
export function getSupabaseAdmin(): SupabaseClient {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
  return createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });
}
