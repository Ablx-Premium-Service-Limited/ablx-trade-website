<template>
  <section id="faq" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in" ref="title">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span class="gradient-text">Questions</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Find answers to common questions about ABLX</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <FAQItem v-for="(faq, index) in faqs" :key="faq.id" :faq="faq" :is-active="activeFAQ === faq.id"
          @toggle="toggleFAQ(faq.id)" :ref="el => { if (el) faqItems[index] = el }" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import FAQItem from './FAQItem.vue'

export default {
  name: 'FAQ',
  components: {
    FAQItem
  },
  setup() {
    const title = ref(null)
    const faqItems = ref([])
    const activeFAQ = ref(null)

    const faqs = [
      {
        id: 1,
        question: 'How do I create an ABLX account?',
        answer: 'Download the ABLX app from the App Store or Google Play, then follow the simple registration process. You\'ll need to provide your email address, phone number, and create a secure password.'
      },
      {
        id: 2,
        question: 'How do I verify my account on the ABLX Trade App?',
        answer: `Verifying your account on ABLX Trade is simple and can be completed in just a few minutes. Follow these steps:

1. **Create an ABLX Trade Account**
   Sign up on the app using your details.

2. **Go to Your Profile**
   After logging in, click on your Account Profile.

3. **Select Account Verification**
   You'll see three verification tiers you can complete:

   **Tier 1:**
   Submit your BVN to unlock up to ₦100,000 deposit limit within 24 hours.
   Withdrawals remain unlimited.

   **Tier 2:**
   Submit your NIN for higher deposit limits.

   **Tier 3:**
   Upload any government-verified document for full access to all fiat deposit limits.

**Important Notes:**

• Verification is only required for depositing fiat (NGN, KES, USD).
• You do not need verification to trade cryptocurrency or gift cards.
• The entire verification process is fast, seamless, and can be completed within 5 minutes.

If you ever need help during verification, our support team is available to assist you.`,
        videoUrl: "https://youtu.be/6R6pAiHO_9Y?si=ocqfu9DnS7CvKTDX",
      }, {
        id: 3,
        question: 'How long do international transfers take?',
        answer: 'Transfers between Nigeria and Kenya are typically completed within minutes. In rare cases, it may take up to 24 hours during high transaction periods.'
      },
      {
        id: 4,
        question: 'Are there limits on transactions?',
        answer: 'Yes, transaction limits vary based on your verification level. Basic accounts have lower limits, while fully verified accounts enjoy higher transaction limits.'
      },
      {
        id: 5,
        question: 'Is my money safe with ABLX?',
        answer: 'Absolutely. ABLX uses bank-level security including encryption, two-factor authentication, and regular security audits to protect your funds and personal information.'
      }
    ]

    const toggleFAQ = (id) => {
      activeFAQ.value = activeFAQ.value === id ? null : id
    }

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.1 })

      if (title.value) observer.observe(title.value)

      faqItems.value.forEach((item, index) => {
        if (item.$el) {
          setTimeout(() => {
            observer.observe(item.$el)
          }, index * 100)
        }
      })
    })

    return {
      title,
      faqItems,
      activeFAQ,
      faqs,
      toggleFAQ
    }
  }
}
</script>