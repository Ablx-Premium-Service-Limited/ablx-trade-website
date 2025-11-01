<template>
  <div class="bg-gray-50 rounded-2xl p-6 card-hover fade-in">
    <div class="flex items-center mb-4">
      <div :class="`w-12 h-12 rounded-full bg-${testimonial.bgColor}-200 flex items-center justify-center text-${testimonial.textColor}-800 font-bold`">
        {{ testimonial.initial }}
      </div>
      <div class="ml-4">
        <h4 class="font-bold">{{ testimonial.name }}</h4>
        <div class="flex text-yellow-400">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
    <p class="text-gray-600">{{ testimonial.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>