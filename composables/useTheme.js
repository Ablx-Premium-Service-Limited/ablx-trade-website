// Stored in a cookie (not localStorage) so the server can read it during SSR
// and render the correct icon/colors on the first response — no flash on refresh.
const systemPrefersDark = ref(false)
let listenerAttached = false

export function useTheme() {
  const theme = useCookie('ablx-theme', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  if (import.meta.client && !listenerAttached) {
    listenerAttached = true
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    systemPrefersDark.value = media.matches
    media.addEventListener('change', (e) => {
      systemPrefersDark.value = e.matches
    })
  }

  const isDark = computed(() =>
    theme.value ? theme.value === 'dark' : systemPrefersDark.value
  )

  function setTheme(mode) {
    theme.value = mode
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, setTheme, toggleTheme }
}
