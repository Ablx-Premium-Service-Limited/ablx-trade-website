<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-24 pb-20 gradient-bg text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span class="text-sm font-medium">Revolutionizing Digital Finance Across Africa</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building the Future of
            <span class="text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"> African Finance</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto opacity-95">
            We're on a mission to democratize financial services across Africa, making crypto trading, cross-border payments, and digital banking accessible to everyone.
          </p>

          <div class="flex justify-center space-x-8 md:space-x-12 pt-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">2M+</div>
              <div class="text-blue-100 text-xs md:text-sm">Transactions</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div class="text-blue-100 text-xs md:text-sm">Countries Served</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div class="text-blue-100 text-xs md:text-sm">Platform Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section id="mission" class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-2">
              <i class="fas fa-bullseye mr-2 text-base"></i>
              <span class="text-sm font-semibold">Our Mission</span>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Empowering <span class="gradient-text">Financial Freedom</span> Across Africa
            </h2>
            
            <div class="space-y-4">
              <p class="text-lg text-gray-600 leading-relaxed">
                At ABLX, we believe that everyone deserves access to modern financial tools. Our mission is to break down barriers and create a seamless financial ecosystem that serves both urban and rural communities.
              </p>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                We're building bridges between traditional finance and the digital future, ensuring that no one is left behind in Africa's economic transformation.
              </p>
            </div>

            <div class="flex flex-wrap gap-6 pt-2">
              <div class="text-center px-3">
                <div class="text-2xl md:text-3xl font-bold gradient-text mb-1">2M+</div>
                <div class="text-gray-500 text-xs md:text-sm">Transactions Processed</div>
              </div>
              <div class="text-center px-3">
                <div class="text-2xl md:text-3xl font-bold gradient-text mb-1">50+</div>
                <div class="text-gray-500 text-xs md:text-sm">Countries Served</div>
              </div>
              <div class="text-center px-3">
                <div class="text-2xl md:text-3xl font-bold gradient-text mb-1">99.9%</div>
                <div class="text-gray-500 text-xs md:text-sm">Platform Uptime</div>
              </div>
            </div>
          </div>

          <!-- <div class="relative">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 border border-white/20">
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">Our Vision</h3>
                <p class="text-lg leading-relaxed mb-6">
                  To become Africa's leading fintech platform, driving financial inclusion and economic growth through innovative technology solutions.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center text-base md:text-lg">
                    <i class="fas fa-check-circle text-green-400 mr-3 text-lg"></i>
                    <span>Accessible to all Africans</span>
                  </div>
                  <div class="flex items-center text-base md:text-lg">
                    <i class="fas fa-check-circle text-green-400 mr-3 text-lg"></i>
                    <span>Secure and transparent operations</span>
                  </div>
                  <div class="flex items-center text-base md:text-lg">
                    <i class="fas fa-check-circle text-green-400 mr-3 text-lg"></i>
                    <span>Borderless financial services</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse-slow"></div>
            <div class="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-400/20 rounded-full animate-pulse-slow" style="animation-delay: 2s;"></div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <i class="fas fa-history mr-2 text-base"></i>
            <span class="text-sm font-semibold">Our Journey</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            The <span class="gradient-text">ABLX Story</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            From a simple idea to a platform serving thousands across Africa
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center fade-in px-4 py-6">
              <div class="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg">
                2020
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Foundation</h3>
              <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                Born from the vision to solve cross-border payment challenges between Nigeria and Kenya, addressing real financial pain points.
              </p>
            </div>

            <div class="text-center fade-in px-4 py-6">
              <div class="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg">
                2021
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Expansion</h3>
              <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                Launched crypto trading and expanded our services to include bill payments, airtime, and data bundles for all networks.
              </p>
            </div>

            <div class="text-center fade-in px-4 py-6">
              <div class="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg">
                2023
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Growth</h3>
              <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                Serving thousands of users across Africa with secure, fast, and affordable financial services, constantly innovating for our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="services" class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <i class="fas fa-cogs mr-2 text-base"></i>
            <span class="text-sm font-semibold">What We Offer</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Comprehensive <span class="gradient-text">Financial Solutions</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your finances in one secure, intuitive platform
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 card-hover border border-blue-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
              <i class="fab fa-bitcoin"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Crypto Trading</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              Buy, sell, and trade major cryptocurrencies with competitive fees and advanced security protocols.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm md:text-base">
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Bitcoin, Ethereum & more
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Real-time market data
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Secure wallet storage
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 card-hover border border-green-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Cross-Border Payments</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              Send money between Nigeria and Kenya instantly with minimal fees and great exchange rates.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm md:text-base">
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Instant transfers
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Low transaction fees
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                24/7 availability
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 card-hover border border-purple-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
              <i class="fas fa-tv"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Bill Payments</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              Pay your cable TV, electricity, and other utility bills directly from the app with instant activation.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm md:text-base">
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                DSTV, GOTV & more
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Instant activation
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Payment history
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 card-hover border border-yellow-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
              <i class="fas fa-wifi"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">Airtime & Data</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              Purchase airtime and data bundles for all major networks instantly with guaranteed best rates.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm md:text-base">
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                All networks supported
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Instant delivery
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2 text-base"></i>
                Best rates guaranteed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="values" class="py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <i class="fas fa-heart mr-2 text-base"></i>
            <span class="text-sm font-semibold">Our Values</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            What <span class="gradient-text">Drives Us</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            The core principles that guide every decision we make and every feature we build
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="bg-white rounded-2xl p-6 md:p-8 card-hover shadow-lg border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Security First</h3>
            <p class="text-gray-600 leading-relaxed text-base">
              We implement bank-level security measures to ensure your funds and data are always protected with advanced encryption and multi-factor authentication.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 card-hover shadow-lg border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
              <i class="fas fa-bolt"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Innovation</h3>
            <p class="text-gray-600 leading-relaxed text-base">
              We continuously evolve our platform with cutting-edge technology to provide the best financial solutions for Africa's unique challenges.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 card-hover shadow-lg border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Customer Focus</h3>
            <p class="text-gray-600 leading-relaxed text-base">
              Our users are at the heart of everything we do. We listen, adapt, and build solutions that truly meet their financial needs.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 card-hover shadow-lg border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
              <i class="fas fa-globe-africa"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Financial Inclusion</h3>
            <p class="text-gray-600 leading-relaxed text-base">
              We're committed to bringing financial services to underserved communities, breaking down barriers to economic participation across Africa.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 card-hover shadow-lg border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
              <i class="fas fa-handshake"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Transparency</h3>
            <p class="text-gray-600 leading-relaxed text-base">
              We believe in clear communication, honest pricing, and building trust through complete transparency in all our operations and fees.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 card-hover shadow-lg border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
              <i class="fas fa-rocket"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Excellence</h3>
            <p class="text-gray-600 leading-relaxed text-base">
              We strive for excellence in every aspect of our service, from user experience to customer support and platform reliability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

useHead({
  title: 'About - ABLX Trade',
  meta: [
    { name: 'description', content: 'About Us In a world clouded by crypto scams and inefficiency, a vision for something better emerged. Ablxtrade was established in 2019 to revolutionize the way people trade, pay, and connect in the digital world. Back then, the crypto space was plagued by slow payments, shady practices, and unnecessary complexity. We saw the frustration of' },
    { name: 'keywords', content: 'trading, finance, investment, ABLX Trade, online trading' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'generator', content: 'All in One SEO (AIOSEO) 4.8.3.2' },
    
    // Open Graph tags
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'ABLX Trade -' },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'About - ABLX Trade' },
    { property: 'og:description', content: 'About Us In a world clouded by crypto scams and inefficiency, a vision for something better emerged. Ablxtrade was established in 2019 to revolutionize the way people trade, pay, and connect in the digital world. Back then, the crypto space was plagued by slow payments, shady practices, and unnecessary complexity. We saw the frustration of' },
    { property: 'og:url', content: 'https://ablxtrade.com/about/' },
    { property: 'article:published_time', content: '2024-07-06T12:55:51+00:00' },
    { property: 'article:modified_time', content: '2025-01-27T20:35:41+00:00' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About - ABLX Trade' },
    { name: 'twitter:description', content: 'About Us In a world clouded by crypto scams and inefficiency, a vision for something better emerged. Ablxtrade was established in 2019 to revolutionize the way people trade, pay, and connect in the digital world. Back then, the crypto space was plagued by slow payments, shady practices, and unnecessary complexity. We saw the frustration of' }
  ],
  link: [
    { rel: 'canonical', href: 'https://ablxtrade.com/about/' }
  ]
});

onMounted(() => {
  // Add scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 0.4; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.05); 
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Enhanced container padding */
.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>