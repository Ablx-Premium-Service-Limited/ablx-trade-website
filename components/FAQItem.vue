<template>
  <div class="bg-white rounded-xl shadow-md p-6 mb-4 fade-in">
    <div class="flex justify-between items-center cursor-pointer" @click="$emit('toggle')">
      <h3 class="text-lg font-bold">{{ faq.question }}</h3>
      <i :class="`fas fa-chevron-${isActive ? 'up' : 'down'} text-blue-500 transition-transform duration-300`"></i>
    </div>
    <div class="mt-4 text-gray-600 transition-all duration-300 overflow-hidden" 
         :style="isActive ? { display: 'block' } : { display: 'none' }">
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQItem',
  props: {
    faq: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle']
}
</script>