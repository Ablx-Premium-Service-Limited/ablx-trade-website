<template>
  <button
    type="button"
    class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
    :class="light ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-blue-700 hover:text-blue-900 hover:bg-blue-50'"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
defineProps({
  light: {
    type: Boolean,
    default: false
  }
})

const { isDark, toggleTheme } = useTheme()
</script>
