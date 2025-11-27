<template>
  <div class="bg-white rounded-xl shadow-md p-6 mb-4 fade-in">
    <div class="flex justify-between items-center cursor-pointer" @click="$emit('toggle')">
      <h3 class="text-lg font-bold">{{ faq.question }}</h3>
      <i :class="`fas fa-chevron-${isActive ? 'up' : 'down'} text-blue-500 transition-transform duration-300`"></i>
    </div>
    <div class="mt-4 text-gray-600 transition-all duration-300 overflow-hidden"
      :style="isActive ? { display: 'block' } : { display: 'none' }">
      <p class="whitespace-pre-line">{{ faq.answer }}</p>

      <!-- YouTube Video Section -->
      <div v-if="faq.videoUrl && isActive" class="mt-4">
        <h4 class="text-md font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-play-circle mr-2 text-red-500"></i>
          Watch Tutorial Video
        </h4>
        <div class="bg-gray-100 rounded-lg overflow-hidden">
          <iframe class="w-full h-48 md:h-64" :src="`https://www.youtube.com/embed/${getVideoId(faq.videoUrl)}`"
            :title="`${faq.question} - Tutorial`" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <p class="text-sm text-gray-500 mt-2">
          Learn more with our step-by-step video guide.
        </p>
      </div>

      <!-- Alternative: Simple YouTube Link -->
      <!-- <div v-if="faq.videoUrl && isActive" class="mt-4">
        <a 
          :href="faq.videoUrl" 
          target="_blank"
          class="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          <i class="fab fa-youtube mr-2"></i>
          Watch Tutorial Video
        </a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  faq: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      question: '',
      answer: '',
      videoUrl: '' // Add videoUrl to the prop definition
    })
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle']);

// Extract YouTube video ID from various URL formats
const getVideoId = (url) => {
  if (!url) return ''

  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?#]+)/,
    /youtube\.com\/watch\?.*v=([^&?#]+)/,
    /youtu\.be\/([^&?#]+)/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  // If no match, return the original string (assuming it's already a video ID)
  return url
}
</script>