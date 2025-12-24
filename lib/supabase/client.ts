import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  
  // Validate environment variables
  if (!supabaseUrl || !supabaseAnonKey || 
      supabaseUrl === 'your_supabase_url_here' || 
      supabaseAnonKey === 'your_supabase_anon_key_here' ||
      !supabaseUrl.startsWith('http')) {
    console.warn('Supabase environment variables are not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
    // Return a client with placeholder values (will fail gracefully)
    return createBrowserClient(
      'https://placeholder.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder'
    )
  }
  
  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}

