/**
 * Resolve private config at request time.
 * Uses bracket access on process.env so Vite/Nitro cannot inline secret
 * values into the build output (Netlify secrets scanning).
 */
export function getPrivateConfig() {
  const config = useRuntimeConfig()
  const env = process.env

  return {
    mongodbUri:
      String(config.mongodbUri || '').trim() ||
      env['NUXT_MONGODB_URI'] ||
      env['MONGODB_URI'] ||
      '',
    mongodbDb:
      String(config.mongodbDb || '').trim() ||
      env['NUXT_MONGODB_DB'] ||
      env['MONGODB_DB'] ||
      'blogs',
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
