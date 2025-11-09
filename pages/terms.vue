<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-24 pb-16 gradient-bg text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <i class="fas fa-file-contract mr-2 text-base"></i>
            <span class="text-sm font-medium">Legal Agreement</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Terms of <span class="text-yellow-300">Service</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
            Please read these terms carefully before using ABLX Trade services. By using our platform, you agree to be bound by these terms.
          </p>

          <div class="flex justify-center space-x-8 md:space-x-12 pt-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-balance-scale"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Legal Compliance</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-user-check"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">User Agreement</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="text-blue-100 text-xs md:text-sm">Platform Rules</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <!-- Last Updated & Acceptance -->
          <div class="text-center mb-12 fade-in">
            <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
              <i class="fas fa-clock mr-2 text-base"></i>
              <span class="text-sm font-semibold">Effective Date: December 1, 2023</span>
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 max-w-3xl mx-auto">
              <div class="flex items-start">
                <i class="fas fa-exclamation-triangle text-yellow-500 text-2xl mr-4 mt-1"></i>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-800">Important Notice</h3>
                  <p class="text-gray-700">
                    By accessing or using ABLX Trade services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div class="bg-gray-50 rounded-2xl p-6 mb-12 card-hover fade-in">
            <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <i class="fas fa-bookmark mr-3 text-blue-500"></i>
              Quick Navigation
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a v-for="section in termsSections" 
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

          <!-- Terms Sections -->
          <div class="space-y-16 flex flex-col gap-10">
            <!-- Agreement -->
            <div id="agreement" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-handshake"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">1. Agreement to Terms</h2>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div class="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    These Terms of Service ("Terms") govern your access to and use of ABLX Trade's website, mobile application, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <p>
                    If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these Terms.
                  </p>
                  <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                    <p class="text-blue-800 font-medium">
                      <i class="fas fa-info-circle mr-2"></i>
                      You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Account Registration -->
            <div id="account-registration" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-user-plus"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">2. Account Registration</h2>
              </div>
              <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white rounded-2xl p-6 border border-gray-200 card-hover">
                    <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-2xl mb-4">
                      <i class="fas fa-id-card"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">KYC Verification</h3>
                    <p class="text-gray-600 leading-relaxed">
                      You must complete our Know Your Customer (KYC) verification process by providing accurate and current identification documents.
                    </p>
                  </div>

                  <div class="bg-white rounded-2xl p-6 border border-gray-200 card-hover">
                    <div class="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-2xl mb-4">
                      <i class="fas fa-lock"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">Account Security</h3>
                    <p class="text-gray-600 leading-relaxed">
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                    </p>
                  </div>
                </div>

                <div class="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <i class="fas fa-exclamation-circle mr-3 text-yellow-600"></i>
                    Important Account Rules
                  </h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span>One account per individual - multiple accounts are strictly prohibited</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span>Provide accurate and truthful information during registration</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span>Immediately notify us of any unauthorized account access</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span>Accounts must not be transferred or sold to other parties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Services Description -->
            <div id="services" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-concierge-bell"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">3. Services Description</h2>
              </div>
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 class="text-2xl font-bold mb-6 text-yellow-300">Our Financial Services</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="service in services" :key="service.title" class="flex items-start">
                      <i class="fas fa-check-circle text-green-400 mr-4 text-xl mt-1"></i>
                      <div>
                        <h4 class="font-bold text-lg mb-1">{{ service.title }}</h4>
                        <p class="text-blue-100 text-sm">{{ service.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fees & Payments -->
            <div id="fees" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-credit-card"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">4. Fees & Payments</h2>
              </div>
              <div class="space-y-6">
                <div class="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 class="text-xl font-bold mb-4 text-gray-800">Transaction Fees</h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div v-for="fee in transactionFees" :key="fee.type" class="text-center p-4 bg-gray-50 rounded-xl">
                      <div class="text-2xl font-bold gradient-text mb-2">{{ fee.amount }}</div>
                      <div class="text-gray-600 font-medium">{{ fee.type }}</div>
                      <div class="text-gray-500 text-sm mt-1">{{ fee.description }}</div>
                    </div>
                  </div>
                </div>

                <div class="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <i class="fas fa-percentage mr-3 text-green-600"></i>
                    Fee Transparency
                  </h3>
                  <p class="text-gray-700 mb-4">
                    We believe in complete fee transparency. All applicable fees will be clearly displayed before you confirm any transaction.
                  </p>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center">
                      <i class="fas fa-check text-green-500 mr-3"></i>
                      No hidden charges or surprise fees
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-check text-green-500 mr-3"></i>
                      Real-time fee calculation before transaction confirmation
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-check text-green-500 mr-3"></i>
                      Detailed fee breakdown available in transaction history
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Prohibited Activities -->
            <div id="prohibited" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-ban"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">5. Prohibited Activities</h2>
              </div>
              <div class="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-200">
                <h3 class="text-2xl font-bold mb-6 text-red-800 flex items-center">
                  <i class="fas fa-exclamation-triangle mr-3"></i>
                  Strictly Forbidden Activities
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div v-for="activity in prohibitedActivities" :key="activity.title" class="bg-white rounded-xl p-4 border border-red-200">
                    <div class="flex items-start">
                      <i class="fas fa-times-circle text-red-500 mr-3 mt-1 text-lg"></i>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-2">{{ activity.title }}</h4>
                        <p class="text-gray-600 text-sm">{{ activity.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 p-4 bg-red-100 rounded-xl border border-red-300">
                  <p class="text-red-800 font-medium text-center">
                    <i class="fas fa-gavel mr-2"></i>
                    Violation of these prohibitions may result in immediate account suspension, termination, and legal action.
                  </p>
                </div>
              </div>
            </div>

            <!-- Intellectual Property -->
            <div id="intellectual-property" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-copyright"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">6. Intellectual Property</h2>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                      <i class="fas fa-robot mr-3 text-blue-500"></i>
                      Our Rights
                    </h3>
                    <p class="text-gray-600 mb-4">
                      All intellectual property rights in the Services, including trademarks, logos, software, and content, are owned by ABLX Trade or our licensors.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                      <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-3"></i>
                        Platform software and technology
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-3"></i>
                        Brand names and logos
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-3"></i>
                        User interface designs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                      <i class="fas fa-user-lock mr-3 text-purple-500"></i>
                      Your License
                    </h3>
                    <p class="text-gray-600 mb-4">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                      <li class="flex items-center">
                        <i class="fas fa-times text-red-500 mr-3"></i>
                        No reverse engineering
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-times text-red-500 mr-3"></i>
                        No commercial use without permission
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-times text-red-500 mr-3"></i>
                        No copying or redistribution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Limitation of Liability -->
            <div id="liability" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-balance-scale-left"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">7. Limitation of Liability</h2>
              </div>
              <div class="bg-orange-50 rounded-2xl p-6 md:p-8 border border-orange-200">
                <div class="flex items-start mb-6">
                  <i class="fas fa-info-circle text-orange-500 text-2xl mr-4 mt-1"></i>
                  <div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800">Important Legal Disclaimer</h3>
                    <p class="text-gray-700">
                      To the maximum extent permitted by law, ABLX Trade shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white rounded-xl p-4">
                    <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                      <i class="fas fa-chart-line mr-2 text-blue-500"></i>
                      Market Risks
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Cryptocurrency investments are subject to market risks. Past performance does not guarantee future results.
                    </p>
                  </div>
                  <div class="bg-white rounded-xl p-4">
                    <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                      <i class="fas fa-network-wired mr-2 text-green-500"></i>
                      Technical Issues
                    </h4>
                    <p class="text-gray-600 text-sm">
                      We are not liable for service interruptions, delays, or errors caused by factors beyond our reasonable control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Governing Law -->
            <div id="governing-law" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-gavel"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">8. Governing Law & Dispute Resolution</h2>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Applicable Law</h3>
                    <p class="text-gray-600 mb-4">
                      These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
                    </p>
                    <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <p class="text-blue-800 text-sm">
                        <i class="fas fa-map-marker-alt mr-2"></i>
                        <strong>Jurisdiction:</strong> Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Dispute Resolution</h3>
                    <p class="text-gray-600 mb-4">
                      Most disputes can be resolved quickly and amicably by contacting our support team. If we cannot resolve a dispute informally, we agree to resolve any claim through binding arbitration.
                    </p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                      <li class="flex items-center">
                        <i class="fas fa-arrow-right text-blue-500 mr-3"></i>
                        Informal negotiation (30 days)
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-arrow-right text-blue-500 mr-3"></i>
                        Mediation (if required)
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-arrow-right text-blue-500 mr-3"></i>
                        Binding arbitration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div id="contact" class="fade-in">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white text-xl mr-4">
                  <i class="fas fa-envelope"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">9. Contact Information</h2>
              </div>
              <div class="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 class="text-2xl font-bold mb-4 text-yellow-300">Legal & Support Contact</h3>
                  <p class="text-blue-100 mb-6 text-lg">
                    For questions about these Terms or any legal matters, please contact our legal team.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div class="text-center">
                      <i class="fas fa-envelope text-2xl mb-2 text-yellow-300"></i>
                      <h4 class="font-bold mb-1">Legal Department</h4>
                      <p class="text-blue-100">legal@ablxtrade.com</p>
                    </div>
                    <div class="text-center">
                      <i class="fas fa-headset text-2xl mb-2 text-yellow-300"></i>
                      <h4 class="font-bold mb-1">Customer Support</h4>
                      <p class="text-blue-100">support@ablxtrade.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Acceptance Confirmation -->
          <div class="mt-16 p-6 bg-green-50 rounded-2xl border border-green-200 fade-in">
            <div class="flex items-center justify-between flex-col md:flex-row gap-6">
              <div class="flex items-start">
                <i class="fas fa-check-circle text-green-500 text-2xl mr-4 mt-1"></i>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-800">Acceptance of Terms</h3>
                  <p class="text-gray-600">
                    By using ABLX Trade services, you confirm that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
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
          Ready to Start Your <span class="text-yellow-300">Financial Journey</span>?
        </h2>
        <p class="text-lg mb-10 max-w-2xl mx-auto opacity-95">
          Join thousands of users across Africa who trust ABLX for secure and innovative financial services.
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
  title: 'Terms of Service | ABLX Trade - Legal Agreement & Platform Rules',
  meta: [
    {
      name: 'description',
      content: 'ABLX Trade Terms of Service. Learn about user agreements, platform rules, fees, prohibited activities, and legal terms for using our financial services across Africa.'
    },
    {
      name: 'keywords',
      content: 'terms of service, user agreement, legal terms, fintech rules, crypto trading terms, financial services agreement, platform rules'
    },
    {
      property: 'og:title',
      content: 'Terms of Service - ABLX Trade Legal Agreement'
    },
    {
      property: 'og:description',
      content: 'Official Terms of Service for ABLX Trade platform. Understand your rights and responsibilities when using our financial services.'
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
      content: 'ABLX Trade Terms of Service - Legal Platform Agreement'
    },
    {
      name: 'twitter:description',
      content: 'Complete Terms of Service for ABLX Trade financial platform and services.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ablxtrade.com/terms'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service - ABLX Trade",
        "description": "Legal terms and conditions for using ABLX Trade services",
        "publisher": {
          "@type": "Organization",
          "name": "ABLX Trade",
          "url": "https://ablxtrade.com"
        }
      })
    }
  ]
})

// Terms Sections for Navigation
const termsSections = [
  { id: 'agreement', title: 'Agreement', icon: 'fas fa-handshake' },
  { id: 'account-registration', title: 'Account Registration', icon: 'fas fa-user-plus' },
  { id: 'services', title: 'Services', icon: 'fas fa-concierge-bell' },
  { id: 'fees', title: 'Fees & Payments', icon: 'fas fa-credit-card' },
  { id: 'prohibited', title: 'Prohibited Activities', icon: 'fas fa-ban' },
  { id: 'intellectual-property', title: 'Intellectual Property', icon: 'fas fa-copyright' },
  { id: 'liability', title: 'Liability', icon: 'fas fa-balance-scale-left' },
  { id: 'governing-law', title: 'Governing Law', icon: 'fas fa-gavel' },
  { id: 'contact', title: 'Contact', icon: 'fas fa-envelope' }
]

// Services Description
const services = [
  {
    title: 'Crypto Trading',
    description: 'Buy, sell, and trade major cryptocurrencies with advanced security features'
  },
  {
    title: 'Cross-Border Payments',
    description: 'Instant money transfers between Nigeria, Kenya, and other African countries'
  },
  {
    title: 'Bill Payments',
    description: 'Pay utility bills, cable TV subscriptions, and other services directly'
  },
  {
    title: 'Airtime & Data',
    description: 'Purchase mobile airtime and data bundles for all major networks'
  },
  {
    title: 'Digital Wallet',
    description: 'Secure storage for your cryptocurrencies and fiat currencies'
  },
  {
    title: 'Financial Tools',
    description: 'Advanced trading tools and market analysis features'
  }
]

// Transaction Fees
const transactionFees = [
  {
    type: 'Crypto Trading',
    amount: '0.25%',
    description: 'Per trade (buy/sell)'
  },
  {
    type: 'Cross-Border Payments',
    amount: '1.5%',
    description: 'Of transfer amount'
  },
  {
    type: 'Bank Transfers',
    amount: '₦50',
    description: 'Flat fee per transfer'
  }
]

// Prohibited Activities
const prohibitedActivities = [
  {
    title: 'Money Laundering',
    description: 'Any attempt to conceal the origins of illegally obtained money'
  },
  {
    title: 'Fraudulent Activities',
    description: 'Creating fake accounts or providing false information'
  },
  {
    title: 'Market Manipulation',
    description: 'Wash trading, spoofing, or other manipulative practices'
  },
  {
    title: 'Terror Financing',
    description: 'Funding terrorist organizations or related activities'
  },
  {
    title: 'Identity Theft',
    description: 'Using another person\'s identity or documents'
  },
  {
    title: 'Circumventing Security',
    description: 'Attempting to bypass platform security measures'
  },
  {
    title: 'Multiple Accounts',
    description: 'Creating more than one personal account per individual'
  },
  {
    title: 'Illegal Activities',
    description: 'Using services for any illegal purposes or transactions'
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

/* Legal notice styling */
.legal-notice {
  border-left: 4px solid #e53e3e;
  background: #fed7d7;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
}
</style>