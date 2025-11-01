<template>
  <div class="bg-gray-50 rounded-2xl p-6 card-hover fade-in">
    <div class="feature-icon">
      <i :class="`fas fa-${feature.icon} text-white text-2xl`"></i>
    </div>
    <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
    <p class="text-gray-600">{{ feature.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}
</script>