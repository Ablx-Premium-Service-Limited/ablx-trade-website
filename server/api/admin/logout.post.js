export default defineEventHandler((event) => {
  assertSameOrigin(event)
  clearAdminSessionCookie(event)

  return {
    success: true,
    message: 'Logged out successfully'
  }
})
