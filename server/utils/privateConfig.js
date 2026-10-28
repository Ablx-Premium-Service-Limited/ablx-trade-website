/**
 * Resolve private config at request time.
 * Uses bracket access on process.env so Vite/Nitro cannot inline secret
 * values into the build output (Netlify secrets scanning).
 */
export function getPrivateConfig() {
  const config = useRuntimeConfig()
  const env = process.env

  return {
    supabaseUrl:
      String(config.supabaseUrl || '').trim() ||
      env['NUXT_SUPABASE_URL'] ||
      env['SUPABASE_URL'] ||
      '',
    supabaseServiceRoleKey:
      String(config.supabaseServiceRoleKey || '').trim() ||
      env['NUXT_SUPABASE_SERVICE_ROLE_KEY'] ||
      env['SUPABASE_SERVICE_ROLE_KEY'] ||
      '',
    adminEmail:
      String(config.adminEmail || '').trim() ||
      env['NUXT_ADMIN_EMAIL'] ||
      env['ADMIN_EMAIL'] ||
      '',
    adminPassword:
      String(config.adminPassword || '') ||
      env['NUXT_ADMIN_PASSWORD'] ||
      env['ADMIN_PASSWORD'] ||
      '',
    adminSessionSecret:
      String(config.adminSessionSecret || '').trim() ||
      env['NUXT_ADMIN_SESSION_SECRET'] ||
      env['ADMIN_SESSION_SECRET'] ||
      ''
  }
}
