<template>
  <section class="py-16 gradient-bg text-white" id="hero">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 fade-in" ref="title">Ready to Transform Your Financial Experience?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto fade-in" ref="subtitle">Join thousands of users who are already enjoying seamless financial transactions with ABLX</p>
        <div class="flex flex-col w-full sm:justify-center sm:flex-row gap-4" ref="buttons">
          <button class="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105">
            <i class="fab fa-apple mr-3 text-xl"></i> 
            <div class="text-left">
              <div class="text-xs opacity-70">Download on</div>
              <div>App Store</div>
            </div>
          </button>
          
          <button class="group px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105">
            <i class="fab fa-google-play mr-3 text-xl"></i>
            <div class="text-left">
              <div class="text-xs opacity-70">Get it on</div>
              <div>Google Play</div>
            </div>
          </button>
          
          <a 
            href="https://app.ablxtrade.com" 
            target="_blank"
            class="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105 border-2 border-yellow-400"
          >
            <i class="fas fa-rocket mr-3 text-xl"></i>
            <div class="text-left">
              <div class="text-xs opacity-70">Launch</div>
              <div>Web App</div>
            </div>
          </a>
        </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CTA',
  setup() {
    const title = ref(null)
    const subtitle = ref(null)
    const buttons = ref(null)

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.1 })

      if (title.value) observer.observe(title.value)
      if (subtitle.value) observer.observe(subtitle.value)
      if (buttons.value) observer.observe(buttons.value)
    })

    return {
      title,
      subtitle,
      buttons
    }
  }
}
</script>