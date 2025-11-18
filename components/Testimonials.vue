<template>
  <section id="testimonials" class="py-16 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our <span class="gradient-text">Users Say</span></h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied customers across Nigeria and Kenya</p>
      </div>
      
      <!-- Carousel Container -->
      <div class="relative max-w-xl mx-auto">
        <!-- Carousel Track -->
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="w-full flex-shrink-0 px-4"
          >
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-500"
                 :class="getCardClass(testimonial.id)">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4"
                     :class="getAvatarColor(testimonial.id)">
                  {{ testimonial.avatar }}
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">{{ testimonial.name }}</h3>
                  <p class="text-gray-600">{{ testimonial.location }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
              
              <div class="flex mb-4">
                <span v-for="star in 5" :key="star" class="text-yellow-400 text-xl">
                  {{ star <= testimonial.rating ? '★' : '☆' }}
                </span>
              </div>
              
              <p class="text-gray-700 text-lg leading-relaxed italic">{{ testimonial.content }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 border border-gray-100"
          aria-label="Previous testimonial"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 border border-gray-100"
          aria-label="Next testimonial"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Indicators -->
      <div class="flex justify-center mt-12 space-x-3">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
          :class="currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'"
          :aria-label="`Go to testimonial ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'TestimonialsCarousel',
  setup() {
    const currentIndex = ref(0)
    const autoPlayInterval = ref(null)

    const testimonials = [
      {
        id: 1,
        name: 'Chinedu O.',
        location: 'Lagos, Nigeria',
        role: 'Business Owner',
        avatar: 'C',
        rating: 5,
        content: '"Sending money to my sister in Kenya has never been easier. The transaction is instant with Zero fees compared to traditional banks."'
      },
      {
        id: 2,
        name: 'Amina K.',
        location: 'Nairobi, Kenya',
        role: 'Freelancer',
        avatar: 'A',
        rating: 5,
        content: '"I use ABLX for all my bill payments and crypto investments. The interface is so user-friendly and the customer support is excellent."'
      },
      {
        id: 3,
        name: 'James M.',
        location: 'Accra, Ghana',
        role: 'Digital Marketer',
        avatar: 'J',
        rating: 5,
        content: '"As a freelancer working with international clients, ABLX has made receiving payments and converting to local currency seamless."'
      },
      {
        id: 4,
        name: 'Sarah T.',
        location: 'Kampala, Uganda',
        role: 'Teacher',
        avatar: 'S',
        rating: 5,
        content: '"The security features give me peace of mind. I can manage my finances safely and the multi-currency support is a game-changer!"'
      },
      {
        id: 5,
        name: 'David L.',
        location: 'Abuja, Nigeria',
        role: 'Entrepreneur',
        avatar: 'D',
        rating: 5,
        content: '"ABLX has revolutionized how I handle cross-border transactions. Fast, reliable, and the exchange rates are unbeatable."'
      },
      {
        id: 6,
        name: 'Mariam B.',
        location: 'Dar es Salaam, Tanzania',
        role: 'Student',
        avatar: 'M',
        rating: 5,
        content: '"From savings to investments and everyday transactions, ABLX is my all-in-one financial solution. Highly recommended!"'
      }
    ]

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % testimonials.length
    }

    const prevSlide = () => {
      currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
    }

    const goToSlide = (index) => {
      currentIndex.value = index
    }

    const getAvatarColor = (id) => {
      const colors = [
        'bg-blue-500',
        'bg-purple-500',
        'bg-green-500',
        'bg-orange-500',
        'bg-red-500',
        'bg-indigo-500'
      ]
      return colors[(id - 1) % colors.length]
    }

    const getCardClass = (id) => {
      const testimonialIndex = testimonials.findIndex(t => t.id === id)
      if (testimonialIndex === currentIndex.value) {
        return 'scale-105 shadow-xl blur-0' // Active card - no blur
      } else {
        return 'scale-95 opacity-90 blur-sm' // Inactive cards - blurred
      }
    }

    const startAutoPlay = () => {
      autoPlayInterval.value = setInterval(nextSlide, 5000)
    }

    const stopAutoPlay = () => {
      if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value)
      }
    }

    onMounted(() => {
      startAutoPlay()
    })

    onUnmounted(() => {
      stopAutoPlay()
    })

    return {
      currentIndex,
      testimonials,
      nextSlide,
      prevSlide,
      goToSlide,
      getAvatarColor,
      getCardClass
    }
  }
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Smooth transitions */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

/* Custom blur transition */
.blur-sm {
  filter: blur(4px);
}

.blur-0 {
  filter: blur(0);
}

/* Ensure smooth blur transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
</style>