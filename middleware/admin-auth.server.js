/**
 * Named server middleware for admin pages.
 * Uses /api/admin/me so we never import Nitro server utils into the Vue middleware bundle.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/admin')) return

  const headers = import.meta.server ? useRequestHeaders(['cookie']) : undefined

  let authenticated = false
  try {
    const data = await $fetch('/api/admin/me', { headers })
    authenticated = Boolean(data?.authenticated)
  } catch {
    authenticated = false
  }

  if (!authenticated && to.path !== '/admin/login') {
    return navigateTo('/admin/login')
  }

  if (authenticated && to.path === '/admin/login') {
    return navigateTo('/admin/dashboard')
  }
})
