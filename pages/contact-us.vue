<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-24 pb-16 gradient-bg text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <i class="fas fa-headset mr-2 text-base"></i>
            <span class="text-sm font-medium">We're Here to Help</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get in <span class="text-yellow-300">Touch</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
            Have questions about our financial services? Our dedicated support team is ready to assist you with any inquiries.
          </p>

          <div class="flex justify-center space-x-8 md:space-x-12 pt-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-clock"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">24/7 Support</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Secure Communication</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-bolt"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Fast Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <!-- Contact Form -->
          <div class="fade-in">
            <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
              <i class="fas fa-paper-plane mr-2 text-base"></i>
              <span class="text-sm font-semibold">Send us a Message</span>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
              Let's Start a <span class="gradient-text">Conversation</span>
            </h2>
            
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours. We're committed to providing you with the best financial solutions.
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your first name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your last name"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                >
              </div>

              <div class="form-group">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                >
              </div>

              <div class="form-group">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="">Select a topic</option>
                  <option value="crypto-trading">Crypto Trading Support</option>
                  <option value="payments">Cross-Border Payments</option>
                  <option value="bill-payments">Bill Payments</option>
                  <option value="airtime-data">Airtime & Data</option>
                  <option value="account">Account Issues</option>
                  <option value="security">Security Concerns</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full gradient-bg text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center">
                  <i class="fas fa-paper-plane mr-3"></i>
                  Send Message
                </span>
                <span v-else class="flex items-center justify-center">
                  <i class="fas fa-spinner fa-spin mr-3"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8 fade-in" style="animation-delay: 0.2s;">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 class="text-2xl md:text-3xl font-bold mb-6 text-yellow-300">Contact Information</h3>
                <p class="text-lg leading-relaxed mb-8">
                  Reach out to us through any of these channels. We're always here to support your financial journey.
                </p>
                
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i class="fas fa-envelope text-yellow-300 text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-1">Email Us</h4>
                      <p class="text-blue-100">support@ablx.finance</p>
                      <p class="text-blue-100">partnerships@ablx.finance</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i class="fas fa-phone text-yellow-300 text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-1">Call Us</h4>
                      <p class="text-blue-100">+234 1 700 0000 (Nigeria)</p>
                      <p class="text-blue-100">+254 20 000 0000 (Kenya)</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i class="fas fa-map-marker-alt text-yellow-300 text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-1">Visit Us</h4>
                      <p class="text-blue-100">123 Financial District, Lagos, Nigeria</p>
                      <p class="text-blue-100">456 Business Hub, Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Hours -->
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <h3 class="text-2xl font-bold mb-6 text-gray-800">Support Hours</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="text-gray-600">Monday - Friday</span>
                  <span class="font-semibold text-gray-800">24/7</span>
                </div>
                <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="text-gray-600">Saturday - Sunday</span>
                  <span class="font-semibold text-gray-800">24/7</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Emergency Support</span>
                  <span class="font-semibold text-green-600">Always Available</span>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <!-- <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 card-hover">
              <h3 class="text-2xl font-bold mb-6 text-gray-800">Quick Help</h3>
              <div class="space-y-4">
                <a href="#" class="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-question-circle"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">FAQ Center</h4>
                    <p class="text-sm text-gray-600">Find answers to common questions</p>
                  </div>
                </a>
                
                <a href="#" class="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-book"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Help Documentation</h4>
                    <p class="text-sm text-gray-600">Step-by-step guides and tutorials</p>
                  </div>
                </a>
                
                <a href="#" class="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-comments"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Live Chat</h4>
                    <p class="text-sm text-gray-600">Instant messaging with our team</p>
                  </div>
                </a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <i class="fas fa-question-circle mr-2 text-base"></i>
            <span class="text-sm font-semibold">Common Questions</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Frequently Asked <span class="gradient-text">Questions</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to the most common questions about our services
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl p-6 card-hover border border-gray-100 fade-in" :style="`animation-delay: ${index * 0.1}s`">
              <div class="flex items-start">
                <div class="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <i class="fas fa-question text-sm"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-3 text-gray-800">{{ faq.question }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 gradient-bg text-white" id="hero">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span class="text-yellow-300">Transform</span> Your Financial Experience?
        </h2>
        <p class="text-lg mb-10 max-w-2xl mx-auto opacity-95">
          Join thousands of satisfied users who trust ABLX for their financial needs across Africa.
        </p>
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

    <!-- Footer -->
     <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Data
useHead({
  title: 'Contact Us | ABLX Fintech - Get in Touch with African Financial Experts',
  meta: [
    {
      name: 'description',
      content: 'Contact ABLX Fintech for all your financial service inquiries. Get support for crypto trading, cross-border payments, bill payments, and more across Africa.'
    },
    {
      name: 'keywords',
      content: 'contact ablx, fintech support, crypto trading help, cross-border payments, african finance, customer service'
    },
    {
      property: 'og:title',
      content: 'Contact ABLX Fintech - African Financial Services Support'
    },
    {
      property: 'og:description',
      content: 'Get in touch with ABLX Fintech for expert support on crypto trading, payments, and financial services across Africa.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Contact ABLX Fintech - Get Financial Support Across Africa'
    },
    {
      name: 'twitter:description',
      content: 'Reach out to ABLX Fintech for all your financial service needs and inquiries.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ablxtrade.com/contact/'
    }
  ]
})

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  isSubmitting.value = false
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  // Show success message (you can implement a toast notification here)
  alert('Thank you for your message! We will get back to you within 24 hours.')
}

// FAQ Data
const faqs = [
  {
    question: 'How secure are my transactions with ABLX?',
    answer: 'We use bank-level security with 256-bit encryption, multi-factor authentication, and regular security audits to ensure your funds and data are always protected.'
  },
  {
    question: 'What countries do you currently operate in?',
    answer: 'We currently serve customers in Nigeria, Kenya, Ghana, and South Africa, with plans to expand to more African countries soon.'
  },
  {
    question: 'How long do cross-border payments take?',
    answer: 'Most cross-border payments between Nigeria and Kenya are processed instantly, with a maximum processing time of 2 hours during peak periods.'
  },
  {
    question: 'What cryptocurrencies can I trade on your platform?',
    answer: 'We support major cryptocurrencies including Bitcoin, Ethereum, USDT, BNB, and several other popular digital assets with more being added regularly.'
  },
  {
    question: 'Are there any hidden fees for your services?',
    answer: 'We believe in complete transparency. All our fees are clearly displayed before you confirm any transaction, with no hidden charges.'
  },
  {
    question: 'How can I verify my account?',
    answer: 'Account verification is simple and can be completed in the app with a valid government-issued ID and a selfie. The process typically takes less than 10 minutes.'
  }
]

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

/* Form focus effects */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.2);
}

/* Loading animation */
.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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