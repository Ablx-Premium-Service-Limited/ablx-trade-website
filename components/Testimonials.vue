<template>
  <section id="testimonials" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 fade-in" ref="title">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our <span class="gradient-text">Users Say</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied customers across Nigeria and Kenya</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard 
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
          :ref="el => { if (el) testimonialCards[index] = el }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialCard
  },
  setup() {
    const title = ref(null)
    const testimonialCards = ref([])

    const testimonials = [
      {
        id: 1,
        initial: 'C',
        name: 'Chinedu O.',
        bgColor: 'blue',
        textColor: 'blue',
        content: '"Sending money to my sister in Kenya has never been easier. The transaction is instant and the fees are very low compared to traditional banks."'
      },
      {
        id: 2,
        initial: 'A',
        name: 'Amina K.',
        bgColor: 'purple',
        textColor: 'purple',
        content: '"I use ABLX for all my bill payments and crypto investments. The interface is so user-friendly and the customer support is excellent."'
      },
      {
        id: 3,
        initial: 'J',
        name: 'James M.',
        bgColor: 'green',
        textColor: 'green',
        content: '"As a freelancer working with international clients, ABLX has made receiving payments and converting to local currency seamless."'
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
      
      testimonialCards.value.forEach((card, index) => {
        if (card.$el) {
          setTimeout(() => {
            observer.observe(card.$el)
          }, index * 150)
        }
      })
    })

    return {
      title,
      testimonialCards,
      testimonials
    }
  }
}
</script>