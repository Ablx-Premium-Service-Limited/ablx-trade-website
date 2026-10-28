export default defineEventHandler((event) => {
  const session = requireAdmin(event)

  return {
    authenticated: true,
    user: {
      email: session.email,
      name: session.name,
      role: session.role
    }
  }
})
