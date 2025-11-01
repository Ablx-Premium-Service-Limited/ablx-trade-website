<template>
  <section id="how-it-works" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in" ref="title">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">How <span class="gradient-text">ABLX Works</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Get started in just a few simple steps</p>
      </div>
      
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-1/2 mb-10 md:mb-0 slide-in-left" ref="leftContent">
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">1</div>
                <div class="ml-4">
                  <h3 class="text-xl font-bold">Create Your Account</h3>
                  <p class="text-gray-600">Sign up in minutes with your email and phone number</p>
                </div>
              </div>
              
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">2</div>
                <div class="ml-4">
                  <h3 class="text-xl font-bold">Verify Your Identity</h3>
                  <p class="text-gray-600">Complete KYC verification for secure transactions</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">3</div>
                <div class="ml-4">
                  <h3 class="text-xl font-bold">Fund Your Wallet</h3>
                  <p class="text-gray-600">Add money via bank transfer or card payment</p>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div class="md:w-1/2 slide-in-right" ref="rightContent">
          <div class="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h3 class="text-2xl font-bold mb-6 text-center">Start Using ABLX Today</h3>
            
            <div class="space-y-4">
              <div class="flex items-center p-4 bg-blue-50 rounded-lg">
                <i class="fas fa-shield-alt text-blue-500 text-xl mr-4"></i>
                <div>
                  <h4 class="font-bold">Bank-Level Security</h4>
                  <p class="text-sm text-gray-600">Your funds and data are protected with encryption</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-green-50 rounded-lg">
                <i class="fas fa-bolt text-green-500 text-xl mr-4"></i>
                <div>
                  <h4 class="font-bold">Instant Transactions</h4>
                  <p class="text-sm text-gray-600">Send money and pay bills in seconds</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-purple-50 rounded-lg">
                <i class="fas fa-headset text-purple-500 text-xl mr-4"></i>
                <div>
                  <h4 class="font-bold">24/7 Support</h4>
                  <p class="text-sm text-gray-600">Our team is always ready to help you</p>
                </div>
              </div>
            </div>
            
            <button class="w-full mt-6 py-3 gradient-bg text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">Get Started Now</button>
          </div>
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
    const title = ref(null)
    const leftContent = ref(null)
    const rightContent = ref(null)

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.1 })

      if (title.value) observer.observe(title.value)
      if (leftContent.value) observer.observe(leftContent.value)
      if (rightContent.value) observer.observe(rightContent.value)
    })

    return {
      title,
      leftContent,
      rightContent
    }
  }
}
</script>