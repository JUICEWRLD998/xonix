import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project') || supabaseAnonKey.includes('your-anon-key')) {
    console.warn('⚠️ Supabase credentials not configured. Please update .env.local with your Supabase project URL and API key.')
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
