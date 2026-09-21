const THEME_KEY = 'ablx-theme'

const isDark = ref(false)
let initialized = false

function applyTheme(dark) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', dark)
}

export function useTheme() {
  if (!initialized && import.meta.client) {
    initialized = true

    // The inline head script already applied the class before hydration; just read it.
    isDark.value = document.documentElement.classList.contains('dark')

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        isDark.value = e.matches
        applyTheme(isDark.value)
      }
    })
  }

  function setTheme(mode) {
    isDark.value = mode === 'dark'
    applyTheme(isDark.value)
    if (import.meta.client) {
      localStorage.setItem(THEME_KEY, mode)
    }
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, setTheme, toggleTheme }
}
