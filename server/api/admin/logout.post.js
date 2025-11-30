export default defineEventHandler(async (event) => {
  // Clear authentication cookies
  setCookie(event, 'adminAuth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0 // Expire immediately
  })

  setCookie(event, 'adminUser', '', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0
  })

  return {
    success: true,
    message: 'Logged out successfully'
  }
})