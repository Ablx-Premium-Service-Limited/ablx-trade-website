<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white overflow-hidden relative">
    <!-- Animated Background Elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow"></div>
    <div class="absolute top-1/4 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse-slow" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-pulse-slow" style="animation-delay: 2s;"></div>
    
    <!-- Floating Crypto Icons -->
    <div class="absolute top-1/3 left-1/4 animate-float">
      <i class="fab fa-bitcoin text-yellow-400/30 text-4xl"></i>
    </div>
    <div class="absolute top-1/2 right-1/3 animate-float" style="animation-delay: 2s;">
      <i class="fab fa-ethereum text-purple-400/30 text-3xl"></i>
    </div>
    
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
      <div class="md:w-1/2 mb-10 md:mb-0 slide-in-left" ref="leftContent">
        <!-- Trust Badge -->
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <span class="text-sm font-medium">Trusted by 50,000+ Users</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your All-in-One 
          <span class="text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Fintech</span> 
          Solution
        </h1>
        
        <p class="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Buy and sell crypto, pay bills, send money across borders, and manage your finances all in one <span class="font-semibold text-yellow-300">secure platform</span>.
        </p>
        
        <!-- Stats -->
        <div class="flex flex-wrap gap-6 mb-8">
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-yellow-300">$50M+</div>
            <div class="text-sm opacity-80">Transactions</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-yellow-300">50K+</div>
            <div class="text-sm opacity-80">Active Users</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-yellow-300">99.9%</div>
            <div class="text-sm opacity-80">Uptime</div>
          </div>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
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
                  </div>
        
        <!-- Security Badges -->
        <div class="flex items-center mt-8 space-x-6">
          <div class="flex items-center space-x-2">
            <i class="fas fa-shield-alt text-green-400"></i>
            <span class="text-sm">Bank-Level Security</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="fas fa-bolt text-yellow-400"></i>
            <span class="text-sm">Instant Transactions</span>
          </div>
        </div>
      </div>
      
      <!-- App Preview -->
      <div class="md:w-1/2 flex justify-center slide-in-right" ref="rightContent">
        <div class="relative">
          <!-- Main App Card -->
          <div class="bg-white rounded-3xl shadow-2xl p-6 w-80 h-96 relative z-10 animate-float border-2 border-white/20">
            <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 rounded-2xl p-6 text-white h-full flex flex-col backdrop-blur-sm">
              <!-- Header -->
              <div class="flex justify-between items-center mb-6">
                <div class="font-bold text-lg flex items-center">
                  <div class="w-6 h-6 bg-yellow-400 rounded-full mr-2"></div>
                  ABLX Wallet
                </div>
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div class="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div class="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
              
              <!-- Balance -->
              <div class="mb-6">
                <div class="text-sm opacity-80 flex items-center">
                  Total Balance 
                  <i class="fas fa-eye ml-2 text-xs"></i>
                </div>
                <div class="text-3xl font-bold mt-1">$4,258.75</div>
                <div class="text-green-400 text-sm flex items-center mt-1">
                  <i class="fas fa-arrow-up mr-1"></i>
                  +2.5% today
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="grid grid-cols-4 gap-3 mb-6">
                <div class="bg-white/10 rounded-xl p-3 text-center hover:bg-white/20 transition-all cursor-pointer">
                  <i class="fas fa-exchange-alt mb-2 text-yellow-300"></i>
                  <div class="text-xs">Send</div>
                </div>
                <div class="bg-white/10 rounded-xl p-3 text-center hover:bg-white/20 transition-all cursor-pointer">
                  <i class="fas fa-wifi mb-2 text-green-300"></i>
                  <div class="text-xs">Data</div>
                </div>
                <div class="bg-white/10 rounded-xl p-3 text-center hover:bg-white/20 transition-all cursor-pointer">
                  <i class="fab fa-bitcoin mb-2 text-orange-400"></i>
                  <div class="text-xs">Crypto</div>
                </div>
                <div class="bg-white/10 rounded-xl p-3 text-center hover:bg-white/20 transition-all cursor-pointer">
                  <i class="fas fa-tv mb-2 text-purple-300"></i>
                  <div class="text-xs">TV</div>
                </div>
              </div>
              
              <!-- Recent Transactions -->
              <div class="flex-1 mb-4">
                <div class="text-sm opacity-80 mb-2">Recent Activity</div>
                <div class="space-y-2">
                  <div class="flex justify-between items-center text-xs">
                    <div class="flex items-center">
                      <div class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-2">
                        <i class="fas fa-arrow-down text-green-400 text-xs"></i>
                      </div>
                      <span>BTC Purchase</span>
                    </div>
                    <span class="text-green-400">+$500</span>
                  </div>
                  <div class="flex justify-between items-center text-xs">
                    <div class="flex items-center">
                      <div class="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mr-2">
                        <i class="fas fa-arrow-up text-red-400 text-xs"></i>
                      </div>
                      <span>Send to Kenya</span>
                    </div>
                    <span class="text-red-400">-$200</span>
                  </div>
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="mt-auto">
                <div class="flex justify-between text-sm mb-2">
                  <div>**** **** **** 4582</div>
                  <div>09/25</div>
                </div>
                <div class="flex justify-between items-center">
                  <div class="font-bold text-yellow-300">ABLX CARD</div>
                  <div class="flex">
                    <div class="w-8 h-8 bg-yellow-400 rounded-full -mr-3 border-2 border-purple-600"></div>
                    <div class="w-8 h-8 bg-red-400 rounded-full border-2 border-purple-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-80 h-96 bg-blue-400/20 rounded-3xl opacity-40 animate-pulse-slow backdrop-blur-sm"></div>
          <div class="absolute -bottom-4 -left-4 w-80 h-96 bg-purple-400/20 rounded-3xl opacity-40 animate-pulse-slow backdrop-blur-sm" style="animation-delay: 2s;"></div>
          
          <!-- Notification Badge -->
          <div class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-ping">
            <i class="fas fa-bell"></i>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const leftContent = ref(null)
const rightContent = ref(null)

onMounted(() => {
  // Trigger animations when component mounts
  setTimeout(() => {
    if (leftContent.value) leftContent.value.classList.add('visible')
    if (rightContent.value) rightContent.value.classList.add('visible')
  }, 100)
  
  // Add intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  
  if (leftContent.value) observer.observe(leftContent.value)
  if (rightContent.value) observer.observe(rightContent.value)
})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  position: relative;
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
    radial-gradient(circle at 80% 20%, #1d4ed8 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>