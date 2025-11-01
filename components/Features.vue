<template>
  <section id="features" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in" ref="title">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Powerful Features for <span class="gradient-text">Modern Finance</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">ABLX provides all the financial tools you need in one secure application</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          v-for="(feature, index) in features"
          :key="feature.id"
          :feature="feature"
          :ref="el => { if (el) featureCards[index] = el }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import FeatureCard from './FeatureCard.vue'

export default {
  name: 'Features',
  components: {
    FeatureCard
  },
  setup() {
    const title = ref(null)
    const featureCards = ref([])

    const features = [
      {
        id: 1,
        icon: 'exchange-alt',
        title: 'Crypto Trading',
        description: 'Buy and sell Bitcoin, Ethereum, and other cryptocurrencies with ease and security.'
      },
      {
        id: 2,
        icon: 'globe-africa',
        title: 'Cross-Border Payments',
        description: 'Send money from Nigeria to Kenya and vice versa instantly with low fees.'
      },
      {
        id: 3,
        icon: 'tv',
        title: 'Cable TV Subscription',
        description: 'Pay for DSTV, GOTV, and other cable services directly from the app.'
      },
      {
        id: 4,
        icon: 'wifi',
        title: 'Airtime & Data',
        description: 'Purchase airtime and data bundles for all networks instantly.'
      }
    ]

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.1 })

      if (title.value) observer.observe(title.value)
      
      // Observe feature cards with staggered delay
      featureCards.value.forEach((card, index) => {
        if (card.$el) {
          setTimeout(() => {
            observer.observe(card.$el)
          }, index * 100)
        }
      })
    })

    return {
      title,
      featureCards,
      features
    }
  }
}
</script>