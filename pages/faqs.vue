<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <!-- Navigation -->
        <Navigation />

        <!-- Hero Section -->
        <section class="pt-24 pb-16 gradient-bg text-white">
            <div class="container mx-auto px-4 sm:px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <div
                        class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                        <i class="fas fa-question-circle mr-2 text-base"></i>
                        <span class="text-sm font-medium">Frequently Asked Questions</span>
                    </div>

                    <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Find Your <span class="italic">Answers</span>
                    </h1>

                    <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
                        Everything you need to know about ABLX Trade. Can't find the answer you're looking for? Please
                        contact our support team.
                    </p>

                    <!-- Search Bar -->
                    <div class="max-w-2xl mx-auto mt-8">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="Search for questions..."
                                class="w-full px-6 py-4 pl-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                            <i
                                class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-100"></i>
                        </div>
                    </div>

                    <div class="flex justify-center space-x-8 md:space-x-12 pt-8">
                        <div class="text-center">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="text-blue-100 text-xs md:text-sm">Secure Trading</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <div class="text-blue-100 text-xs md:text-sm">Fast Transactions</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div class="text-blue-100 text-xs md:text-sm">24/7 Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Content -->
        <section class="py-16 md:py-20 bg-white">
            <div class="container mx-auto px-4 sm:px-6">
                <div class="max-w-6xl mx-auto">
                    <!-- Categories -->
                    <div class="text-center mb-12 fade-in">
                        <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
                            <i class="fas fa-layer-group mr-2 text-base"></i>
                            <span class="text-sm font-semibold">{{ filteredFaqs.length }} Questions Available</span>
                        </div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Common Questions</h2>

                        <!-- Category Filters -->
                        <div class="flex flex-wrap justify-center gap-3 mb-8">
                            <button v-for="category in categories" :key="category.id"
                                @click="setActiveCategory(category.id)" :class="[
                                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                                    activeCategory === category.id
                                        ? 'gradient-bg text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                ]">
                                {{ category.name }}
                            </button>
                        </div>
                    </div>

                    <!-- FAQ List -->
                    <div class="space-y-6">
                        <div v-for="faq in filteredFaqs" :key="faq.id"
                            class="bg-gray-50 rounded-2xl overflow-hidden card-hover">
                            <button @click="toggleFaq(faq.id)"
                                class="w-full px-6 py-6 md:px-8 md:py-6 text-left flex items-center justify-between focus:outline-none">
                                <div class="flex items-start space-x-4">
                                    <div
                                        class="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white mt-1 flex-shrink-0">
                                        <i class="fas fa-question text-sm"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">{{ faq.question }}
                                        </h3>
                                        <div class="text-gray-600 text-sm transition-all duration-300 overflow-hidden"
                                            :class="openFaq === faq.id ? 'max-h-0' : 'max-h-6'">
                                            Click to {{ openFaq === faq.id ? 'collapse' : 'expand' }}
                                        </div>
                                    </div>
                                </div>
                                <div class="text-blue-500 text-xl transition-transform duration-300 flex-shrink-0"
                                    :class="openFaq === faq.id ? 'rotate-180' : ''">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </button>

                            <!-- Answer -->
                            <div class="transition-all duration-300"
                                :class="openFaq === faq.id ? 'opacity-100' : 'max-h-0 opacity-0'">
                                <div class="px-6 pb-6 md:px-8 md:pb-8 border-t border-gray-200 pt-6">
                                    <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                                        <div v-html="formatAnswer(faq.answer)"></div>
                                    </div>

                                    <!-- YouTube Video Section -->
                                    <div v-if="faq.videoUrl" class="mt-6">
                                        <h4 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                            <i class="fas fa-play-circle mr-2 text-red-500"></i>
                                            Watch Video
                                        </h4>
                                        <div class="relative bg-gray-200 rounded-xl" style="padding-bottom: 56.25%;">
                                            <!-- 16:9 aspect ratio -->
                                            <iframe class="absolute top-0 left-0 w-full h-full" :src="faq.videoUrl"
                                                title="ABLX Trade Tutorial" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>
                                    </div>

                                    <!-- Additional Info -->
                                    <div v-if="hasContactInfo(faq.answer)"
                                        class="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                        <p class="text-blue-800 text-sm flex items-center">
                                            <i class="fas fa-info-circle mr-2"></i>
                                            Need more help? Contact our support team for immediate assistance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- No Results -->
                        <div v-if="filteredFaqs.length === 0" class="text-center py-12 fade-in">
                            <div
                                class="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                <i class="fas fa-search"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">No questions found</h3>
                            <p class="text-gray-600 mb-6">Try adjusting your search terms or browse different
                                categories.</p>
                            <button @click="clearSearch"
                                class="px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                                Clear Search
                            </button>
                        </div>
                    </div>

                    <!-- Contact CTA -->
                    <div
                        class="mt-16 p-8 bg-gradient-to-br from-[#00AAFD] to-[#2E53B0] rounded-2xl text-white text-center fade-in">
                        <div class="max-w-2xl mx-auto">
                            <i class="fas fa-headset text-4xl mb-4 text-yellow-300"></i>
                            <h3 class="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
                            <p class="text-blue-100 mb-6 text-lg">
                                Our support team is here to help you with any questions about ABLX Trade.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="mailto:support@ablxtrade.com"
                                    class="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                    <i class="fas fa-envelope mr-2"></i>
                                    Email Support
                                </a>
                            </div>
                        </div>
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
import { ref, computed, onMounted } from 'vue'

// SEO Meta Data
useSeoMeta({
  title: 'FAQ | ABLX Trade - Frequently Asked Questions & Support',
  ogTitle: 'FAQ | ABLX Trade - Frequently Asked Questions & Support',
  description: 'Find answers to frequently asked questions about ABLX Trade. Learn about trading, security, fees, account verification, and more.',
  ogDescription: 'Find answers to frequently asked questions about ABLX Trade. Learn about trading, security, fees, account verification, and more.',
  ogImage: 'https://ablxtrade.com/favi.png',
  ogImageAlt: 'ABLX Trade FAQ',
  ogUrl: 'https://ablxtrade.com/faqs',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'FAQ | ABLX Trade - Frequently Asked Questions & Support',
  twitterDescription: 'Find answers to frequently asked questions about ABLX Trade. Learn about trading, security, fees, account verification, and more.',
  twitterImage: 'https://ablxtrade.com/favi.png',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
});

// Set additional head tags
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://ablxtrade.com/faqs'
    }
  ],
  meta: [
    {
      name: 'keywords',
      content: 'ABLX Trade FAQ, trading questions, crypto support, gift card trading, account verification, fees, security'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      })
    }
  ]
});

// Complete FAQ Data with all objects
const faqs = [
    {
        "id": "9976e4fb-c7c8-4347-9344-d19d433450f1",
        "question": "What is ABLX Trade?",
        "answer": "ABLX Trade is a leading trading company that specializes in facilitating cryptocurrency and gift card exchanges. We provide a secure and reliable platform for users to buy and sell digital assets and gift card.",
        "category": "general"
    },
    {
        "id": "9976e50d-0592-4775-9578-057d72415d7d",
        "question": "How does ABLX Trade work?",
        "answer": "ABLX Trade is a secure and user-friendly cryptocurrency exchange platform that allows you to buy, sell, and trade digital assets seamlessly. Here's how it works:\n1. Sign Up & Verify: Create an account and complete the Know Your Customer (KYC) verification for security and compliance.\n2. Request wallet: request wallet to trade your crypto currencies by clicking on trade, choosing your preferred asset to trade and inputing the amount you intend to exchange then clicking proceed.\n3. Trade Crypto: sell cryptocurrencies at real-time market rates.\n4. Withdraw Your Funds: Securely withdraw your fiat to your preferred  bank account.\n5. Stay Secure & Updated: Enable two-factor authentication (2FA) and receive price alerts for better trading decisions.",
        "category": "getting-started",
    },
    {
        "id": "9976e50e-0592-4775-9578-057d72415e3r",
        "question": "How do I verify my account on the ABLX Trade App?",
        "category": "getting-started",
        "answer": "Verifying your account on ABLX Trade is simple and can be completed in just a few minutes. Follow these steps:\n\n1. **Create an ABLX Trade Account**\n   Sign up on the app using your details.\n\n2. **Go to Your Profile**\n   After logging in, click on your Account Profile.\n\n3. **Select Account Verification**\n   You'll see three verification tiers you can complete:\n\n   **Tier 1:**\n   Submit your BVN to unlock up to ₦100,000 deposit limit within 24 hours.\n   Withdrawals remain unlimited.\n\n   **Tier 2:**\n   Submit your NIN for higher deposit limits.\n\n   **Tier 3:**\n   Upload any government-verified document for full access to all fiat deposit limits.\n\n**Important Notes:**\n\n• Verification is only required for depositing fiat (NGN, KES, USD).\n• You do not need verification to trade cryptocurrency or gift cards.\n• The entire verification process is fast, seamless, and can be completed within 5 minutes.\n\nIf you ever need help during verification, our support team is available to assist you.",
        "videoUrl": "https://www.youtube.com/embed/6R6pAiHO_9Y"
    },
    {
        "id": "9976e50e-6a42-45ef-b666-7bd1c3666830",
        "question": "Which cryptocurrencies does ABLX Trade support?",
        "answer": "ABLX Trade supports a wide range of popular cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and many others. Our platform allows users to exchange different Cryptocurrencies and gift cards  to fiat.",
        "category": "assets"
    },
    {
        "id": "9976e5f1-62b9-464c-9a0c-38968bdaa9c8",
        "question": "Can I trust ABLX Trade with my funds?",
        "answer": "Absolutely! At ABLX Trade, we prioritize the security and protection of our users' funds. We employ state-of-the-art security measures, including encryption and multi-factor authentication, to safeguard your assets. Additionally, we have a robust verification process for users to ensure the legitimacy of transactions.",
        "category": "security"
    },
    {
        "id": "9976f43f-b310-47e6-9a94-36c81a5fd79c",
        "question": "How long does it take to complete a transaction?",
        "answer": "The duration of a transaction on ABLX Trade depends on various factors, including network congestion and the responsiveness of the parties involved. Generally, cryptocurrency transactions are typically processed within few minutes after confirmation from senders wallet, while gift card transactions are usually completed within a few minutes or hours depending on the card processing time.",
        "category": "trading"
    },
    {
        "id": "9976f444-b39b-432c-9bbe-21296e54b3e2",
        "question": "Are there any fees associated with using ABLX Trade?",
        "answer": "No, ABLX Trade does not charge any fees for transactions. We believe in providing a transparent and seamless trading experience without hidden costs.\n* No Trading Fees – You can buy and sell cryptocurrencies without paying extra charges.\n* No Deposit Fees – Depositing funds into your account is completely free.\n* No Withdrawal Fees – You can withdraw your funds without incurring any charges.\nOur goal is to offer a cost-effective platform where you can trade securely and efficiently.",
        "category": "fees"
    },
    {
        "id": "9976f453-cbf5-4471-887b-9ec184e7c591",
        "question": "How can I contact ABLX Trade's customer support?",
        "answer": "If you have any questions or concerns, our dedicated customer support team is available to assist you. You can reach us through our website's contact form, email using support@ablxtrade.com or live chat feature. We strive to provide timely and helpful support to ensure a smooth trading experience for all our users.",
        "category": "support"
    },
    {
        "id": "9976f454-6e53-405c-91ca-130eb647213c",
        "question": "Is my personal information safe with ABLX Trade?",
        "answer": "Protecting your privacy is a top priority for us. We adhere to strict data protection protocols and comply with applicable privacy laws. We only collect the necessary information required to facilitate transactions and maintain account security. Rest assured that your personal information is stored securely and treated with utmost confidentiality.",
        "category": "security"
    },
    {
        "id": "9976f4cd-0c64-4c27-a171-ab76e32af255",
        "question": "Can I trade gift cards for cryptocurrencies on ABLX Trade?",
        "answer": "No, ABLX Trade does not support the exchange of gift cards for cryptocurrencies. Our platform currently focuses on crypto-to-fiat transactions, allowing users to buy and sell cryptocurrency using supported fiat payment methods, such as bank transfers.\nWe prioritize secure and transparent transactions to ensure the best trading experience for our users.",
        "category": "trading"
    },
    {
        "id": "9976f4ce-0c64-4c27-a1231-ab76e32af126",
        "question": "How do I convert my Naira to Shillings on the ABLX Trade App?",
        "category": "trading",
        "answer": "You can convert Naira (NGN) to Kenyan Shillings (KES) directly on the ABLX Trade App. Simply follow these steps:\n\n1. **Verify Your Account:**\n   Complete your account verification to generate your virtual Naira account.\n\n2. **Deposit Your Naira:**\n   Send money into the virtual account generated for you.\n\n3. **Go to the Convert Section:**\n   Open the Convert feature on the app.\n   Select the currency you are converting from (NGN) and the currency you are converting to (KES or USD).\n   Enter the amount you want to convert.\n\n4. **Confirm Conversion:**\n   Click the Convert button. Your wallet will be credited instantly with the converted amount in NGN, KES, or USD.\n\n5. **Withdraw Your Funds:**\n   To withdraw, simply click the Send button and choose your preferred account or payment method.\n\nThis process is fast, secure, and designed to make currency conversion easy for all users.",
        "videoUrl": "https://www.youtube.com/embed/6Oe8kDbXzHE"
    },
    {
        "id": "9976f4e1-48d8-4031-9ad7-4714fa8a6e0a",
        "question": "How do I get started with ABLX Trade?",
        "answer": "To begin trading on ABLX Trade, you need to sign up for an account on our website or download our app for iOS on the App Store or for Android on the Google Play Store. The registration process is quick and straightforward. Once your account is verified, you can start exploring our platform, view listed assets, and engaging in secure and reliable trading activities.",
        "category": "getting-started"
    },
    {
        "id": "9a1da9e4-a3f5-4c8b-a550-89a4e243bcc4",
        "question": "How can I redeem my reward?",
        "answer": "Go to your app settings.\nScroll down to reward box and click on it. It should take you to your reward amount and click the redeem button which automatically adds to your wallet balance.\nCongratulations!",
        "category": "account"
    },
    {
        "id": "9a1dab45-7107-488f-af90-bfb7152fdead",
        "question": "What is the minimum trading amount required to qualify for rewards?",
        "answer": "To qualify for rewards on ABLX Trade, you need to trade at least $2,000 within a month. Eligible users will receive their rewards on the 28th of every month.\nKeep trading to enjoy exclusive benefits and stay updated on new promotions by checking the Promotions section on our app or following our official social media channels.",
        "category": "account"
    },
    {
        "id": "9ae098fe-a924-4c4f-a093-71a07ecde83d",
        "question": "How can I qualify for 1 million reward?",
        "answer": "1.⁠ ⁠*Download Our App*: Get started by downloading our app and creating an account.\n\n 2.⁠ ⁠*Trade to Win*: Trade up to $100,00 to increase your chances of winning! The more you trade, the higher your chances.\n\n 3.⁠ ⁠*Deadline*: Act fast! Winners will be selected on December 30th, so make sure to complete your trades and entries before then.\n\n 4.⁠ ⁠Winners will be contacted through the email used in registering on the website.",
        "category": "account"
    },
    {
        "id": "9e587733-df1b-45ef-8b2e-11aa6d1b8752",
        "question": "How can I verify that Ablx Premium Service Limited is a legitimate company?",
        "answer": "Ablx Premium Service Limited is a registered cryptocurrency exchange company in Nigeria, operating in compliance with relevant regulations. You can verify our legitimacy by checking our official registration details with the Corporate Affairs Commission (CAC) of Nigeria. Additionally, our platform employs strict security measures to protect users and transactions. For further assurance, you can explore customer reviews and reach out to our support team for any inquiries.",
        "category": "general"
    },
    {
        "id": "9e5878a9-0406-4bc1-94ad-b7f257098ab3",
        "question": "Why should I choose Ablx Premium Service Limited?",
        "answer": "Ablx Premium Service Limited offers a secure, fast, and reliable cryptocurrency exchange experience tailored to meet your needs. Here's why you should choose us:\n\nTrust & Legitimacy: We are a registered company operating with transparency and integrity.\nSecurity First: Our platform uses advanced encryption and fraud detection measures to keep your assets safe.\nFast Transactions: We ensure quick deposits, withdrawals, and trading execution.\nExcellent Customer Support: Our dedicated support team is available to assist you with any concerns.\nCompetitive Rates: We offer fair exchange rates with minimal transaction fees.\nWith Ablx Premium Service Limited, you get a hassle-free crypto trading experience you can trust.",
        "category": "general"
    },
    {
        "id": "9e587977-1f2a-4ff7-9215-fd1c855e9750",
        "question": "What do your previous clients say about your services? Do they return or only trade once?",
        "answer": "Our clients consistently give positive feedback about our secure, fast, and reliable services. Many appreciate our excellent customer support, competitive rates, and smooth transaction process. As a result, a large percentage of our users return for repeat transactions and even refer others to our platform.\n\nYou can check real customer reviews on our website, social media pages, and trusted review platforms. We are committed to maintaining high-quality service to ensure customer satisfaction and long-term trust.",
        "category": "general"
    },
    {
        "id": "9e587a1c-ad8d-41bf-9c7d-490dc59b5063",
        "question": "What if I trade with Ablx Premium Service Limited and the service does not meet my expectations?",
        "answer": "We strive to provide the best cryptocurrency trading experience with secure, fast, and transparent transactions. However, if our service does not meet your expectations, we encourage you to reach out to our customer support team.\n\nWe value customer feedback and are always looking to improve. If there is an issue with your transaction, we will investigate and resolve it as quickly as possible. Your satisfaction is important to us, and we are committed to ensuring a smooth and reliable trading experience.",
        "category": "support"
    },
    {
        "id": "9e587ad4-4325-481e-9676-e635f83a5878",
        "question": "How can I be sure that my transactions on Ablx Premium Service Limited are secure?",
        "answer": "At Ablx Premium Service Limited, security is our top priority. We implement multiple layers of protection to safeguard your transactions, including:\n* Advanced Encryption: All data and transactions are encrypted to prevent unauthorized access.\n* Two-Factor Authentication (2FA): Added security for  withdrawals.\n* Fraud Monitoring: Our system continuously monitors transactions to detect and prevent suspicious activities.\n* Secure Payment Channels: We use trusted and verified payment methods for deposits and withdrawals.\nAdditionally, we follow strict compliance measures to ensure a safe trading environment. If you ever have security concerns, our support team is available to assist you.",
        "category": "security"
    },
    {
        "id": "9e587b6d-c84c-4524-921c-e81b3fe5354c",
        "question": "What happens if there is a system crash during my transaction?",
        "answer": "At Ablx Premium Service Limited, we have measures in place to ensure system stability and protect your transactions. However, in the rare event of a system crash during a transaction:\n\nAutomatic Recovery: Our system is designed to automatically restore transactions once it is back online.\nTransaction Logs: Every transaction is securely recorded, ensuring that no funds are lost.\nCustomer Support: If you experience any issues, our support team is available to verify and resolve your transaction as quickly as possible.\nWe prioritize uptime and reliability, but in case of disruptions, we work swiftly to ensure your funds and transactions remain safe.",
        "category": "trading"
    },
    {
        "id": "9e587c38-2742-41cc-b724-9eb6445528e7",
        "question": "How is the Ablx Premium Service Limited app protected against fraud?",
        "answer": "We take fraud prevention seriously and have implemented multiple security measures to protect our users, including:\n* Two-Factor Authentication (2FA): Adds an extra layer of security for logins and transactions.\n* Advanced Encryption: All data is encrypted to prevent unauthorized access.\n* KYC (Know Your Customer) Verification: We verify users to prevent identity theft and fraudulent accounts.\n* Secure Payment Processing: We only use trusted and verified payment channels.\n* Real-Time Alerts: Users receive instant notifications for any account activity.\nThese security measures help ensure a safe and fraud-free trading experience for all our users. If you ever suspect any suspicious activity, our support team is available to assist you.",
        "category": "security"
    },
    {
        "id": "9e587dee-0df8-4230-a174-3d1739991634",
        "question": "How fast are transactions on the Ablx Premium Service Limited app?",
        "answer": "Our app is designed for speed and efficiency, ensuring that transactions are processed as quickly as possible.\n* Crypto Trades: Most cryptocurrency trades are instant or completed within a few seconds depending on network congestion.\n* Gift cards : Gift cards are confirmed with few minutes depending on the Type of gift cards you are trading because some takes longer time to finish than others \n* Fiat Transactions: Bank  withdrawals depend on the banking system but are typically completed within the few minutes,\nWe continuously optimize our system to ensure fast and seamless transactions, giving you a smooth trading experience.",
        "category": "trading"
    },
    {
        "id": "9e587fb8-5c19-47f9-b792-cec24b924989",
        "question": "What happens if crypto rates drop, but I still want to trade?",
        "answer": "Rates are subject to change . If the rates drop while you want to trade, you have a few options:\n1. Trade Immediately: You can proceed with your trade at the current market rate if you believe it's the right time.\n2. Hold and Wait: If you expect the price to rise again, you can wait before making a trade.\n3. Set Price Alerts: Use our app's price alert feature on trending section to track when rate  rate reaches your desired level.\n\nRegardless of market conditions, we ensure transparent and real-time rates so you can make informed trading decisions.",
        "category": "trading"
    },
    {
        "id": "9e5b59ea-b1b8-4a3a-bf19-4eb9670d37dc",
        "question": "What is the current exchange rate of Bitcoin to the US Dollar?",
        "answer": "The price of Bitcoin (BTC) against the US Dollar (USD) fluctuates constantly due to market demand and supply. To check the real-time exchange rate, visit the ABLX Trade app or website.\nYou can also enable price alerts on our platform to stay updated on Bitcoin's latest market value.",
        "category": "assets"
    },
    {
        "id": "9e5dbc67-223d-42bc-8d63-39fb2aeb5af3",
        "question": "How much is a Bitcoin to a dollar?",
        "answer": "The price of Bitcoin (BTC) against the US Dollar (USD) fluctuates constantly due to market demand and supply. To check the real-time exchange rate, visit the ABLX Trade app or website.\nYou can also enable price alerts on our platform to stay updated on Bitcoin's latest market value.",
        "category": "assets"
    },
    {
        "id": "9e5e05e1-c238-4c86-91a4-e4caf231bae3",
        "question": "How can I trade gift cards if I am using a Kenya-based account?",
        "answer": "If you are using a Kenya-based account and want to trade gift cards, you need to switch your account currency to Naira (NGN). This will enable you to access the gift card trading feature on ABLX Trade.\nTo switch your currency:\n1. Go to your account settings in the ABLX Trade app.\n2. Select currency settings and change it to Naira (NGN).\n3. Once updated, you can proceed with gift card trading.\nIf you need assistance, our customer support team is available to guide you through the process.",
        "category": "trading"
    },
    {
        "id": "9e5e074f-778a-4b39-9e9d-ea651cfd6742",
        "question": "What should I do if my bank withdrawal is delayed?",
        "answer": "Bank withdrawals on ABLX Trade are usually processed quickly, but delays may sometimes occur due to:\n1. Bank Processing Time – Some banks take longer to process incoming transactions.\n2. Network Issues – Temporary banking network downtimes may cause delays.\n3. Incomplete Details – Ensure that your bank account details are correct to avoid processing errors.\n4. High Transaction Volume – During peak periods, withdrawals may take slightly longer to complete.\nIf you do not receive your money within the expected time, please:✅ Check your bank account for any pending transactions.✅ Confirm that your withdrawal details were entered correctly.✅ Contact your bank to check for any delays on their end.✅ Reach out to ABLX Trade's customer support for assistance.\nWe are always available to help ensure that your funds are received as soon as possible.",
        "category": "trading"
    },
    {
        "id": "9ee89fb0-82f2-4fdd-b781-47cb58b8b1ec",
        "question": "Does my verification stops me from exchanging my gift card or crypto?",
        "answer": "No, it doesnt but it might limit you from other features in the app such as depositing of fiat and more but you can withdraw and trade eventhough you are not verified.",
        "category": "account"
    }
]

// Reactive data
const searchQuery = ref('')
const openFaq = ref(null)
const activeCategory = ref('all')

// Categories
const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'account', name: 'Account & Verification' },
    { id: 'trading', name: 'Trading' },
    { id: 'fees', name: 'Fees & Payments' },
    { id: 'security', name: 'Security' },
    { id: 'assets', name: 'Assets' },
    { id: 'support', name: 'Support' }
]
// Computed
const filteredFaqs = computed(() => {
    console.log('Current category:', activeCategory.value)
    console.log('Current search:', searchQuery.value)

    let filtered = [...faqs] // Create a copy to avoid mutating original

    // Filter by category first
    if (activeCategory.value !== 'all') {
        filtered = filtered.filter(faq => {
            const matches = faq.category === activeCategory.value
            return matches
        })
    }

    // Then filter by search query
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(faq => {
            const matches = faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query)
            return matches
        })
    }

    return filtered
});


// Methods
const toggleFaq = (id) => {
    openFaq.value = openFaq.value === id ? null : id
}

const setActiveCategory = (category) => {
    activeCategory.value = category
    openFaq.value = null // Close any open FAQ when changing category
}

const clearSearch = () => {
    searchQuery.value = ''
    activeCategory.value = 'all'
}

const formatAnswer = (answer) => {
    // Convert line breaks to HTML and format lists
    return answer
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<li>$1</li>')
        .replace(/(\d+\.)\s/g, '<br>$1 ')
}

const hasContactInfo = (answer) => {
    return answer.toLowerCase().includes('support@ablxtrade.com') ||
        answer.toLowerCase().includes('contact') ||
        answer.toLowerCase().includes('support')
}

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

    // Open first FAQ by default on mobile for better UX
    if (window.innerWidth < 768 && filteredFaqs.value.length > 0) {
        openFaq.value = filteredFaqs.value[0].id
    }
})
</script>

<style scoped>
.gradient-bg {
    background: linear-gradient(135deg, #00AAFD 0%, #2E53B0 100%);
}

.gradient-text {
    background: linear-gradient(135deg, #00AAFD 0%, #2E53B0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.backdrop-blur-sm {
    backdrop-filter: blur(8px);
}

/* Smooth transitions for FAQ items */
.faq-item {
    transition: all 0.3s ease;
}

/* Custom scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Responsive improvements */
@media (max-width: 640px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

/* Enhanced focus styles for accessibility */
button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}
</style>