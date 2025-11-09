<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-24 pb-16 gradient-bg text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <i class="fas fa-shield-alt mr-2 text-base"></i>
            <span class="text-sm font-medium">Your Privacy Matters</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Privacy <span class="text-yellow-300">Policy</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
            Learn how ABLX protects your financial data and respects your privacy across all our services.
          </p>

          <div class="flex justify-center space-x-8 md:space-x-12 pt-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-lock"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Bank-Level Security</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-user-shield"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Data Protection</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-transparency"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Full Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Policy Content -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <!-- Last Updated -->
          <div class="text-center mb-12 fade-in">
            <div class="inline-flex items-center bg-green-50 text-green-600 rounded-full px-4 py-2 mb-4">
              <i class="fas fa-clock mr-2 text-base"></i>
              <span class="text-sm font-semibold">Last Updated: December 1, 2023</span>
            </div>
            <p class="text-lg text-gray-600">
              This policy describes how ABLX Trade collects, uses, and protects your personal information.
            </p>
          </div>

          <!-- Quick Navigation -->
          <div class="bg-gray-50 rounded-2xl p-6 mb-12 card-hover fade-in">
            <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <i class="fas fa-bookmark mr-3 text-blue-500"></i>
              Quick Navigation
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a v-for="section in policySections" 
                 :key="section.id"
                 :href="`#${section.id}`"
                 class="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
              >
                <div class="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                  <i :class="section.icon"></i>
                </div>
                <span class="text-gray-700 font-medium text-sm">{{ section.title }}</span>
              </a>
            </div>
          </div>

          <!-- Policy Sections -->
          <div class="space-y-12 flex flex-col gap-10">
            <!-- Introduction -->
            <div id="introduction" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-info-circle"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Introduction</h2>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                <p class="text-gray-600 leading-relaxed mb-4 text-lg">
                  At ABLX Trade ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our financial services platform.
                </p>
                <p class="text-gray-600 leading-relaxed text-lg">
                  By accessing or using ABLX services, you consent to the practices described in this policy. We encourage you to read this policy carefully to understand our views and practices regarding your personal data.
                </p>
              </div>
            </div>

            <!-- Information We Collect -->
            <div id="information-collected" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-database"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              <div class="space-y-6">
                <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <i class="fas fa-user-circle mr-3 text-blue-500"></i>
                    Personal Information
                  </h3>
                  <ul class="space-y-3 text-gray-600">
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Identity Data:</strong> Full name, government-issued ID, date of birth, photograph</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Contact Data:</strong> Email address, phone number, residential address</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Financial Data:</strong> Bank account details, transaction history, payment information</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Verification Data:</strong> KYC documents, proof of address, selfie verification</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                  <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <i class="fas fa-laptop-code mr-3 text-purple-500"></i>
                    Technical Information
                  </h3>
                  <ul class="space-y-3 text-gray-600">
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Device Information:</strong> IP address, browser type, device type, operating system</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Usage Data:</strong> App interactions, feature usage, session duration</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1 text-lg"></i>
                      <span><strong>Location Data:</strong> General location based on IP address for security purposes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- How We Use Your Information -->
            <div id="information-use" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-cogs"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="use in informationUses" :key="use.title" class="bg-white rounded-2xl p-6 border border-gray-200 card-hover">
                  <div class="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                    <i :class="use.icon"></i>
                  </div>
                  <h3 class="text-xl font-bold mb-3 text-gray-800">{{ use.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ use.description }}</p>
                </div>
              </div>
            </div>

            <!-- Data Sharing -->
            <div id="data-sharing" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-share-alt"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Data Sharing & Disclosure</h2>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                <p class="text-gray-600 leading-relaxed mb-6 text-lg">
                  We may share your information in the following circumstances:
                </p>
                <div class="space-y-4">
                  <div class="flex items-start p-4 bg-white rounded-xl border border-gray-200">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                      <i class="fas fa-gavel"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-1">Legal Requirements</h4>
                      <p class="text-gray-600 text-sm">When required by law, regulation, or legal process</p>
                    </div>
                  </div>
                  <div class="flex items-start p-4 bg-white rounded-xl border border-gray-200">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                      <i class="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-1">Service Providers</h4>
                      <p class="text-gray-600 text-sm">Trusted partners who help us deliver our services</p>
                    </div>
                  </div>
                  <div class="flex items-start p-4 bg-white rounded-xl border border-gray-200">
                    <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-1">Security & Fraud Prevention</h4>
                      <p class="text-gray-600 text-sm">To protect our platform and users from fraudulent activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Data Security -->
            <div id="data-security" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-lock"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Data Security</h2>
              </div>
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 class="text-2xl font-bold mb-6 text-yellow-300">Bank-Level Security Measures</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="security in securityMeasures" :key="security.title" class="flex items-start">
                      <i class="fas fa-check-circle text-green-400 mr-4 text-xl mt-1"></i>
                      <div>
                        <h4 class="font-bold text-lg mb-1">{{ security.title }}</h4>
                        <p class="text-blue-100">{{ security.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Your Rights -->
            <div id="your-rights" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-user-check"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Your Rights</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="right in userRights" :key="right.title" class="bg-white rounded-2xl p-6 border border-gray-200 card-hover text-center">
                  <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    <i :class="right.icon"></i>
                  </div>
                  <h3 class="text-xl font-bold mb-3 text-gray-800">{{ right.title }}</h3>
                  <p class="text-gray-600 leading-relaxed text-sm">{{ right.description }}</p>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div id="contact" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-envelope"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6 md:p-8 text-center">
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Privacy Concerns & Questions</h3>
                <p class="text-gray-600 mb-6 text-lg">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact our Data Protection Officer.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="mailto:privacy@ablxtrade.com" class="inline-flex items-center px-6 py-3 gradient-bg text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
                    <i class="fas fa-envelope mr-3"></i>
                    privacy@ablxtrade.com
                  </a>
                  <a href="/contact" class="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-bold rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300">
                    <i class="fas fa-headset mr-3"></i>
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Policy Updates -->
          <div class="mt-16 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 fade-in">
            <div class="flex items-start">
              <i class="fas fa-exclamation-triangle text-yellow-500 text-2xl mr-4 mt-1"></i>
              <div>
                <h3 class="text-xl font-bold mb-2 text-gray-800">Policy Updates</h3>
                <p class="text-gray-600 mb-3">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p class="text-gray-600 text-sm">
                  Your continued use of our services after any modifications constitutes acceptance of the updated policy.
                </p>
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
          Trusted by <span class="text-yellow-300">Thousands</span> Across Africa
        </h2>
        <p class="text-lg mb-10 max-w-2xl mx-auto opacity-95">
          Join the financial revolution with a platform that prioritizes your privacy and security.
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
import { onMounted } from 'vue'

// SEO Meta Data
useHead({
  title: 'Privacy Policy | ABLX Trade - Secure Financial Data Protection',
  meta: [
    {
      name: 'description',
      content: 'Read ABLX Trade\'s comprehensive Privacy Policy. Learn how we protect your financial data, ensure security, and respect your privacy across Africa.'
    },
    {
      name: 'keywords',
      content: 'privacy policy, data protection, financial security, africa fintech, crypto privacy, data security, GDPR compliance'
    },
    {
      property: 'og:title',
      content: 'Privacy Policy - ABLX Trade Data Protection & Security'
    },
    {
      property: 'og:description',
      content: 'Learn how ABLX Trade protects your financial data with bank-level security and transparent privacy practices.'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'ABLX Trade Privacy Policy - Your Data Security Matters'
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive privacy policy for ABLX Trade services across Africa.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ablxtrade.com/privacy-policy/'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - ABLX Trade",
        "description": "Comprehensive privacy policy detailing data protection practices for ABLX Trade services.",
        "publisher": {
          "@type": "Organization",
          "name": "ABLX Trade",
          "url": "https://ablxtrade.com/"
        }
      })
    }
  ]
})

// Policy Sections for Navigation
const policySections = [
  { id: 'introduction', title: 'Introduction', icon: 'fas fa-info-circle' },
  { id: 'information-collected', title: 'Information Collected', icon: 'fas fa-database' },
  { id: 'information-use', title: 'How We Use Data', icon: 'fas fa-cogs' },
  { id: 'data-sharing', title: 'Data Sharing', icon: 'fas fa-share-alt' },
  { id: 'data-security', title: 'Data Security', icon: 'fas fa-lock' },
  { id: 'your-rights', title: 'Your Rights', icon: 'fas fa-user-check' }
]

// Information Uses
const informationUses = [
  {
    title: 'Service Provision',
    icon: 'fas fa-rocket',
    description: 'To provide, maintain, and improve our financial services, including crypto trading, payments, and bill services.'
  },
  {
    title: 'Security & Fraud Prevention',
    icon: 'fas fa-shield-alt',
    description: 'To protect your account, detect and prevent fraud, and ensure platform security.'
  },
  {
    title: 'Regulatory Compliance',
    icon: 'fas fa-gavel',
    description: 'To comply with legal obligations, including KYC/AML regulations and financial reporting requirements.'
  },
  {
    title: 'Customer Support',
    icon: 'fas fa-headset',
    description: 'To provide customer support, respond to inquiries, and resolve technical issues.'
  }
]

// Security Measures
const securityMeasures = [
  {
    title: '256-bit Encryption',
    description: 'Bank-level encryption for all data transmission and storage'
  },
  {
    title: 'Multi-Factor Authentication',
    description: 'Advanced MFA to protect account access'
  },
  {
    title: 'Regular Security Audits',
    description: 'Continuous security assessments and penetration testing'
  },
  {
    title: 'Secure Data Centers',
    description: 'ISO 27001 certified data centers with physical security'
  },
  {
    title: 'Access Controls',
    description: 'Role-based access controls and monitoring'
  },
  {
    title: 'Incident Response',
    description: '24/7 security monitoring and rapid incident response'
  }
]

// User Rights
const userRights = [
  {
    title: 'Access Your Data',
    icon: 'fas fa-download',
    description: 'Request a copy of your personal data we hold'
  },
  {
    title: 'Data Correction',
    icon: 'fas fa-edit',
    description: 'Update or correct inaccurate personal information'
  },
  {
    title: 'Data Deletion',
    icon: 'fas fa-trash-alt',
    description: 'Request deletion of your personal data where applicable'
  },
  {
    title: 'Processing Restriction',
    icon: 'fas fa-pause-circle',
    description: 'Limit how we use your personal data in certain circumstances'
  },
  {
    title: 'Data Portability',
    icon: 'fas fa-exchange-alt',
    description: 'Receive your data in a machine-readable format'
  },
  {
    title: 'Object to Processing',
    icon: 'fas fa-ban',
    description: 'Object to certain types of data processing'
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

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
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

/* Custom scroll margin for anchor links */
section[id] {
  scroll-margin-top: 100px;
}

/* Policy section styling */
.policy-section {
  border-left: 4px solid #2563eb;
  padding-left: 1.5rem;
}
</style>