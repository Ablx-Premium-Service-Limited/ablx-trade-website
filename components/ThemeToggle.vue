<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isDark"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="relative inline-flex items-center shrink-0 w-16 h-8 rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AAFD] focus-visible:ring-offset-2"
    :class="trackClass"
    @click="toggleTheme"
  >
    <!-- Track icons -->
    <span class="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
      <svg class="w-4 h-4 transition-opacity duration-300" :class="[iconMuted, isDark ? 'opacity-100' : 'opacity-0']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg class="w-4 h-4 transition-opacity duration-300" :class="[iconMuted, isDark ? 'opacity-0' : 'opacity-100']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </span>

    <!-- Knob -->
    <span
      class="absolute top-1/2 left-0.5 -translate-y-1/2 w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ease-out"
      :class="isDark ? 'translate-x-8 bg-slate-900' : 'translate-x-0 bg-white'"
    >
      <svg v-if="isDark" class="w-4 h-4 text-sky-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg v-else class="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <path d="M12 1.5v2.5M12 20v2.5M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M1.5 12H4M20 12h2.5M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77" />
      </svg>
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  light: {
    type: Boolean,
    default: false
  }
})

const { isDark, toggleTheme } = useTheme()

const trackClass = computed(() => {
  if (props.light) {
    return isDark.value ? 'bg-white/10 border-white/30' : 'bg-white/20 border-white/40'
  }
  return isDark.value ? 'bg-slate-700 border-slate-600' : 'bg-sky-100 border-sky-200'
})

const iconMuted = computed(() => {
  if (props.light) return 'text-white/80'
  return isDark.value ? 'text-amber-300/80' : 'text-slate-500'
})
</script>
