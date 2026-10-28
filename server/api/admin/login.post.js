export default defineEventHandler(async (event) => {
  assertLoginRateLimit(event)
  assertSameOrigin(event)

  const body = await readBody(event)
  const { email, password, remember } = body || {}
  const config = useRuntimeConfig()

  const adminEmail = String(config.adminEmail || '').trim()
  const adminPassword = String(config.adminPassword || '')

  if (!adminEmail || !adminPassword) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Admin credentials are not configured'
    })
  }

  const emailOk = typeof email === 'string' && email.trim() === adminEmail
  const passwordOk = typeof password === 'string' && password === adminPassword

  if (!emailOk || !passwordOk) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password'
    })
  }

  clearLoginRateLimit(event)

  const { token, maxAgeSec, user } = createAdminSessionToken({
    email: adminEmail,
    name: 'Administrator',
    remember: Boolean(remember)
  })

  setAdminSessionCookie(event, token, maxAgeSec)

  return {
    success: true,
    user
  }
})
