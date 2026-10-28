import { createClient } from '@supabase/supabase-js'

let cached = null

export function getSupabaseAdmin() {
  if (cached) return cached

  const { supabaseUrl, supabaseServiceRoleKey } = getPrivateConfig()

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)'
    })
  }

  cached = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  })

  return cached
}
