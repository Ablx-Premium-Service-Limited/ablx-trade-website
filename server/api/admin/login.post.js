export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, remember } = body

  try {
    // Validate credentials
    if (email === 'admin@ablxtrade.com' && password === 'admin123') {
      const userData = {
        email: email,
        name: 'Administrator',
        role: 'admin'
      }

      // Set HttpOnly cookie for authentication
      setCookie(event, 'adminAuth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60 // 30 days or 1 day
      })

      // Set non-HttpOnly cookie for user info (accessible by frontend)
      setCookie(event, 'adminUser', JSON.stringify(userData), {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60
      })

      return {
        success: true,
        user: userData
      }
    } else {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password'
      })
    }
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authentication failed'
    })
  }
})