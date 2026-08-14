"use client"

import { createClient } from '@supabase/supabase-js'

const getSupabaseCredentials = (): { url: string; key: string } => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.SUPABASE_KEY

  if (!url || !key) {
    throw new Error('Missing Supabase credentials in environment variables')
  }

  return { url, key }
}

const { url, key } = getSupabaseCredentials()
const supabase = createClient(url, key)

export { supabase }