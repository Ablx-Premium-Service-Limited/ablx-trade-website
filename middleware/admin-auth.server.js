export default defineNuxtRouteMiddleware(async (to) => {
  // Only run on server-side for admin routes
  if (process.server && to.path.startsWith('/admin')) {
    try {
      // Check authentication by calling our auth API
      const { authenticated } = await $fetch('/api/admin/me')
      
      if (!authenticated && to.path !== '/admin/login') {
        return navigateTo('/admin/login')
      }
      
      if (authenticated && to.path === '/admin/login') {
        return navigateTo('/admin/dashboard')
      }
    } catch (error) {
      // If auth check fails, redirect to login for protected routes
      if (to.path !== '/admin/login') {
        return navigateTo('/admin/login')
      }
    }
  }
})