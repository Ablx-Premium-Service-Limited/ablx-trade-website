<template>
  <section id="features" class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title Section -->
      <div class="text-center mb-16 fade-in-up">
        <div class="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full">
          <span class="text-sm font-semibold text-[#2E53B0]">POWERFUL FEATURES</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
          Everything for <span class="gradient-text">Modern Finance</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          ABLX provides comprehensive financial tools in one secure, intuitive platform
        </p>
      </div>

      <!-- Infinite Carousel Container -->
      <div class="relative overflow-hidden py-8" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
        <!-- Carousel Track -->
        <div ref="carouselTrack" class="flex gap-6 transition-transform duration-700 ease-out"
          :style="{ transform: `translateX(${translateX}px)` }" @touchstart="handleTouchStart"
          @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <!-- Dynamic features rendering with proper infinite loop -->
          <FeatureCard v-for="(feature, index) in displayedFeatures" :key="`feature-${feature.id}-${index}`"
            :feature="feature" class="carousel-item" />
        </div>

        <!-- Gradient Overlays -->
        <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10">
        </div>
        <div
          class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10">
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200"
          aria-label="Previous slide">
          <i class="fa-solid fa-chevron-left text-[#2E53B0] group-hover:text-[#00AAFD] transition-colors"></i>
        </button>

        <button @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200"
          aria-label="Next slide">
          <i class="fa-solid fa-chevron-right text-[#2E53B0] group-hover:text-[#00AAFD] transition-colors"></i>
        </button>
      </div>

      <!-- Indicators -->
      <div class="flex justify-center items-center mt-12 gap-3">
        <span v-for="(feature, index) in features" :key="feature.id" @click="goToSlide(index)"
          class="relative cursor-pointer group" :class="currentSlideIndex === index ? 'w-10' : 'w-2'">
          <span class="block h-2 rounded-full transition-all duration-300 group-hover:bg-[#00AAFD]"
            :class="currentSlideIndex === index ? 'bg-[#2E53B0]' : 'bg-gray-300'"></span>
          <span
            class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {{ feature.title }}
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import FeatureCard from "./FeatureCard.vue";

export default {
  components: { FeatureCard },

  setup() {
    const carouselTrack = ref(null);
    const translateX = ref(0);
    const currentSlideIndex = ref(0);
    const isAnimating = ref(false);
    const autoSlideInterval = ref(null);
    const cardGap = 24; // gap-6 = 24px

    // Touch handling
    const touchStartX = ref(0);
    const touchEndX = ref(0);

    const features = ref([
      {
        id: 1,
        icon: "fa-solid fa-chart-line",
        title: "Crypto Trading",
        description: "Buy, sell, and trade cryptocurrencies with competitive rates and instant execution."
      },
      {
        id: 2,
        icon: "fa-solid fa-globe-americas",
        title: "Cross-Border Payments",
        description: "Send money internationally with low fees and real-time exchange rates."
      },
      {
        id: 3,
        icon: "fa-solid fa-tv",
        title: "TV Subscriptions",
        description: "Pay for DSTV, GOTV, Startimes and all major TV providers instantly."
      },
      {
        id: 4,
        icon: "fa-solid fa-wifi",
        title: "Airtime & Data",
        description: "Recharge airtime and purchase data bundles for all networks in seconds."
      },
      {
        id: 5,
        icon: "fa-solid fa-bolt",
        title: "Utility Bills",
        description: "Pay electricity, water, and other utility bills seamlessly."
      },
      {
        id: 6,
        icon: "fa-solid fa-wallet",
        title: "Wallet Funding",
        description: "Instantly fund betting wallets and gaming accounts securely."
      },
      {
        id: 7,
        icon: "fa-solid fa-exchange-alt",
        title: "Quick Convert",
        description: "Convert between currencies and cryptocurrencies in real-time."
      }
    ]);

    // Create extended array for seamless infinite scroll
    // We add extra features at the beginning and end for smooth transitions
    const displayedFeatures = computed(() => {
      const extended = [...features.value, ...features.value, ...features.value];
      return extended;
    });

    const cardWidth = computed(() => {
      if (!carouselTrack.value || !carouselTrack.value.children[0]) return 384; // Default width for md
      return carouselTrack.value.children[0].offsetWidth + cardGap;
    });

    const totalSlides = computed(() => features.value.length);
    const totalDisplayedSlides = computed(() => displayedFeatures.value.length);
    const middleIndex = computed(() => totalSlides.value); // Start in the middle section

    // Initialize position to start in the middle section
    const initializePosition = () => {
      if (carouselTrack.value) {
        currentSlideIndex.value = 0;
        // Start at the beginning of the middle section
        translateX.value = -(cardWidth.value * totalSlides.value);
      }
    };

    const nextSlide = () => {
      if (isAnimating.value) return;
      isAnimating.value = true;

      currentSlideIndex.value = (currentSlideIndex.value + 1) % totalSlides.value;
      translateX.value -= cardWidth.value;

      // If we've reached the end of the middle section, instantly reset without animation
      setTimeout(() => {
        const currentPosition = -translateX.value / cardWidth.value;

        // If we're at the last slide of the middle section
        if (currentPosition >= totalSlides.value * 2 - 1) {
          // Instantly jump back to the start of the middle section
          translateX.value = -(cardWidth.value * totalSlides.value);
        }

        isAnimating.value = false;
      }, 700); // Match the transition duration
    };

    const prevSlide = () => {
      if (isAnimating.value) return;
      isAnimating.value = true;

      currentSlideIndex.value = currentSlideIndex.value === 0 ? totalSlides.value - 1 : currentSlideIndex.value - 1;
      translateX.value += cardWidth.value;

      // If we've reached the beginning of the middle section, instantly reset without animation
      setTimeout(() => {
        const currentPosition = -translateX.value / cardWidth.value;

        // If we're at the first slide of the middle section
        if (currentPosition < totalSlides.value) {
          // Instantly jump to the end of the middle section
          translateX.value = -(cardWidth.value * (totalSlides.value * 2 - 1));
        }

        isAnimating.value = false;
      }, 700); // Match the transition duration
    };

    const goToSlide = (index) => {
      if (isAnimating.value || currentSlideIndex.value === index) return;
      isAnimating.value = true;

      const diff = index - currentSlideIndex.value;
      translateX.value -= diff * cardWidth.value;
      currentSlideIndex.value = index;

      setTimeout(() => {
        isAnimating.value = false;
      }, 700);
    };

    // Auto-slide functionality
    const startAutoSlide = () => {
      if (autoSlideInterval.value) clearInterval(autoSlideInterval.value);
      autoSlideInterval.value = setInterval(nextSlide, 4000);
    };

    const pauseAutoSlide = () => {
      if (autoSlideInterval.value) {
        clearInterval(autoSlideInterval.value);
        autoSlideInterval.value = null;
      }
    };

    // Touch handling
    const handleTouchStart = (e) => {
      touchStartX.value = e.touches[0].clientX;
      pauseAutoSlide();
    };

    const handleTouchMove = (e) => {
      touchEndX.value = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartX.value || !touchEndX.value) return;

      const diff = touchStartX.value - touchEndX.value;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchStartX.value = 0;
      touchEndX.value = 0;
      startAutoSlide();
    };

    // Handle window resize
    const handleResize = () => {
      // Recalculate position based on new card width
      if (carouselTrack.value) {
        const newCardWidth = carouselTrack.value.children[0].offsetWidth + cardGap;
        const currentPosition = -translateX.value / cardWidth.value;
        translateX.value = -(newCardWidth * currentPosition);
      }
    };

    onMounted(() => {
      // Wait for DOM to be ready
      setTimeout(() => {
        initializePosition();
        startAutoSlide();
      }, 100);

      // Add resize listener
      window.addEventListener('resize', handleResize);

      // Intersection Observer for animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    });

    onBeforeUnmount(() => {
      pauseAutoSlide();
      window.removeEventListener('resize', handleResize);
    });

    return {
      carouselTrack,
      features,
      displayedFeatures,
      translateX,
      currentSlideIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      startAutoSlide,
      pauseAutoSlide,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd
    };
  }
};
</script>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.carousel-item {
  min-width: calc(100vw - 2rem);
}

@media (min-width: 768px) {
  .carousel-item {
    min-width: 28rem;
    /* md:w-96 = 384px */
  }
}

.gradient-text {
  background: linear-gradient(90deg, #00AAFD 0%, #2E53B0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Smooth transitions for carousel */
.transition-transform {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>