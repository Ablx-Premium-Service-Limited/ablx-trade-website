<template>
  <section id="features" class="py-16 bg-white overflow-hidden">
    <div class="container mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-16 fade-in" ref="title">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Powerful Features for <span class="gradient-text">Modern Finance</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          ABLX provides all the financial tools you need in one secure application
        </p>
      </div>

      <!-- Carousel -->
      <div 
        class="relative select-none overflow-x-hidden"
        @mouseenter="pauseAutoSlide"
        @mouseleave="startAutoSlide"
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
          ref="slider"
          @touchstart="startTouch"
          @touchmove="moveTouch"
        >
          <!-- Each slide contains TWO cards -->
          <div
            v-for="(group, gIndex) in groupedFeatures"
            :key="gIndex"
            class="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-2"
          >
            <FeatureCard v-for="item in group" :key="item.id" :feature="item" class="fade-in" />
          </div>
        </div>

        <!-- Arrows -->
        <button
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 text-2xl rounded-full shadow"
          @click="prevSlide"
        >
          ‹
        </button>
        <button
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
          @click="nextSlide"
        >
          ›
        </button>
      </div>

      <!-- Dots -->
      <div class="flex justify-center mt-6 space-x-2">
        <span
          v-for="(group, i) in groupedFeatures"
          :key="i"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="currentIndex === i ? 'bg-blue-600' : 'bg-gray-300'"
          @click="currentIndex = i"
        ></span>
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
    const title = ref(null);
    const slider = ref(null);
    const slideWidth = ref(0);
    const currentIndex = ref(0);
    let autoSlideInterval = null;

    const features = [
      { id: 1, icon: "exchange-alt", title: "Crypto Trading", description: "Buy and sell crypto with ease." },
      { id: 2, icon: "globe-africa", title: "Cross-Border Payments", description: "Send money internationally instantly." },
      { id: 3, icon: "tv", title: "Cable TV Subscription", description: "Pay for DSTV, GOTV, and more." },
      { id: 4, icon: "wifi", title: "Airtime & Data", description: "Buy airtime/data on all networks." },
      { id: 5, icon: "bolt", title: "Electricity Bills", description: "Pay PHCN prepaid/postpaid instantly." },
      { id: 6, icon: "wallet", title: "Betting Wallet Funding", description: "Fund Bet9ja, SportyBet, 1xBet instantly." }
    ];

    // GROUP INTO PAIRS
    const groupedFeatures = computed(() => {
      const groups = [];
      for (let i = 0; i < features.length; i += 3) {
        groups.push(features.slice(i, i + 3));
      }
      return groups;
    });

    const nextSlide = () => {
      currentIndex.value =
        currentIndex.value === groupedFeatures.value.length - 1
          ? 0
          : currentIndex.value + 1;
    };

    const prevSlide = () => {
      currentIndex.value =
        currentIndex.value === 0
          ? groupedFeatures.value.length - 1
          : currentIndex.value - 1;
    };

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 3000);
    };

    const pauseAutoSlide = () => clearInterval(autoSlideInterval);

    // Swipe handling
    let startX = 0;
    const startTouch = (e) => (startX = e.touches[0].clientX);
    const moveTouch = (e) => {
      if (!startX) return;
      let diff = startX - e.touches[0].clientX;
      if (diff > 50) nextSlide();
      if (diff < -50) prevSlide();
      startX = 0;
    };

    // Setup slide width & IntersectionObserver
    onMounted(() => {
      slideWidth.value = slider.value.children[0].offsetWidth;
      startAutoSlide();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.2 }
      );

      if (title.value) observer.observe(title.value);

      slider.value.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    });

    onBeforeUnmount(() => pauseAutoSlide());

    return {
      title,
      slider,
      features,
      groupedFeatures,
      slideWidth,
      currentIndex,
      nextSlide,
      prevSlide,
      startTouch,
      moveTouch,
      startAutoSlide,
      pauseAutoSlide
    };
  }
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.gradient-text {
  background: linear-gradient(to right, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
