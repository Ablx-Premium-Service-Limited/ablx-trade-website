export default defineEventHandler(async (event) => {
  // Check if adminAuth cookie exists
  const adminAuth = getCookie(event, 'adminAuth')
  const adminUser = getCookie(event, 'adminUser')

  if (!adminAuth || adminAuth !== 'true') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Not authenticated'
    })
  }

  try {
    const userData = adminUser ? JSON.parse(adminUser) : null
    return {
      authenticated: true,
      user: userData
    }
  } catch {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid user data'
    })
  }
})