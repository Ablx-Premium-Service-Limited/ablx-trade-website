<template>
  <nav class="w-full z-50 fixed transition-all duration-300" :class="navBackground">
    <div class="container mx-auto w-full px-4 py-4">
      <div class="flex justify-between w-full items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            <img :src="logoSrc" alt="ABLX Logo" class="w-12 h-12" :class="hasLogo ? '' : 'rounded-full mt-3 sm:pt-0'"/>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="link in navigationLinks" 
            :key="link.name"
            :href="link.href" 
            class="nav-link font-medium transition-all duration-300 relative group"
            :class="hasLogo ? 'text-white/90 hover:text-white' : 'text-blue-700 hover:text-blue-900'"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden lg:flex items-center space-x-4">
          <button 
            class="px-8 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400"
            @click="scrollToHero"
          >
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="hasLogo ? 'text-white/90 hover:text-white' : 'text-black-700 hover:text-black-900'"
          @click="toggleMobileMenu"
        >
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        class="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transition-all duration-300"
        :class="mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
      >
        <div class="p-6 space-y-4">
          <a 
            v-for="link in navigationLinks" 
            :key="link.name"
            :href="link.href" 
            class="block font-medium py-2 transition-colors border-b border-white/10 last:border-b-0"
            @click="closeMobileMenu"
            :class="hasLogo ? 'text-white/90 hover:text-white' : 'text-black'"
          >
            {{ link.name }}
          </a>
          <div class="pt-4 space-y-3">
            <button 
              class="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              @click="scrollToHero"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Overlay for Mobile Menu -->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const hasLogo = ref(true) // Set to false if logo image is not available
const isScrolled = ref(false)

const navigationLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '#contact' }
]

const navBackground = ref('gradient-bg')
const logoSrc = computed(() =>
  hasLogo.value ? '/asset-1-1.png' : '/icon.png'
)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToHero = () => {
  const heroSection = document.getElementById('hero')
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' })
  }
  closeMobileMenu()
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  // Change background based on scroll position
  navBackground.value = isScrolled.value 
    ? 'bg-white/90 backdrop-blur-md shadow-lg' 
    : 'gradient-bg'
    hasLogo.value = !isScrolled.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  position: relative;
  overflow: hidden;
}

.gradient-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
  pointer-events: none;
}

.nav-link {
  position: relative;
  padding: 8px 0;
  transition: all 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-2px);
}

/* Smooth transitions for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Backdrop blur support for older browsers */
@supports not (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    background-color: rgba(255, 255, 255, 0.95);
  }
}

/* Custom scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Enhanced focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #fbbf24;
  outline-offset: 2px;
  border-radius: 8px;
}
</style>