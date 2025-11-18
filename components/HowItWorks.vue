<template>
  <section id="how-it-works" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">How <span class="gradient-text">ABLX Trade Works</span></h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Experience the future of digital trading with our powerful yet intuitive platform designed to keep you efficient and informed every step of the way.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side - Steps -->
        <div class="space-y-8">
          <!-- Step 1 -->
          <div class="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                1
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Create Your Account</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                Sign up in minutes with ABLX Trade and unlock seamless access to crypto and gift card trading. Complete verification and start trading immediately.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                2
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Initiate a Trade</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                Select your preferred currency or gift card to trade. Our intelligent system ensures fast, secure, and seamless transaction processing.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex gap-6 group hover:transform hover:scale-105 transition-all duration-300">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                3
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Get Paid Instantly</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                Experience lightning-fast payments with ABLX Trade. Receive your funds in minutes and enjoy the rewards of your successful trading journey.
              </p>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-6">
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Trading Now
            </button>
          </div>
        </div>

        <!-- Right Side - Person Using Phone -->
        <div class="relative">
          <!-- Main Image Container -->
          <div class="relative z-10">
            <div class="relative">
              <!-- Person with Phone Image -->
              <img 
                src="/photo-1517841905240-472988babdf9.png"
                alt="Happy person using ABLX Trade app on smartphone"
                class="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
                          </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-float"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-float-delayed"></div>
                  </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div class="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
            <i class="fas fa-shield-alt text-blue-600 text-2xl"></i>
          </div>
          <h4 class="text-xl font-bold mb-3">Bank-Level Security</h4>
          <p class="text-gray-600">Military-grade encryption protects your funds and personal data at all times</p>
        </div>

        <div class="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
            <i class="fas fa-bolt text-green-600 text-2xl"></i>
          </div>
          <h4 class="text-xl font-bold mb-3">Instant Transactions</h4>
          <p class="text-gray-600">Send money, pay bills, and complete trades in seconds, not days</p>
        </div>

        <div class="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
          <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
            <i class="fas fa-headset text-purple-600 text-2xl"></i>
          </div>
          <h4 class="text-xl font-bold mb-3">24/7 Support</h4>
          <p class="text-gray-600">Our dedicated team is always available to assist you with any questions</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'HowItWorks',
  setup() {
    const elements = ref([])

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      }, { threshold: 0.1 })

      // Observe all elements with animation classes
      document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el)
      })
    })

    return {
      elements
    }
  }
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #1a35cb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #2e5dec 100%);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.fade-in-up {
  opacity: 0;
}

/* Ensure the phone overlay is properly positioned */
.relative .absolute {
  z-index: 20;
}
</style>