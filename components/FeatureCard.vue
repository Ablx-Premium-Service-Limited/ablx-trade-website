<template>
  <div
    class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col group"
    :class="cardClasses">
    <!-- Icon with gradient background -->
    <div class="relative mb-6">
      <div
        class="w-20 h-20 rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
        :class="iconBgClasses">
        <i :class="`${feature.icon} text-3xl text-white`"></i>
      </div>
    </div>

    <!-- Content -->
    <h3
      class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
      {{ feature.title }}
    </h3>

    <p class="text-gray-600 dark:text-gray-300 flex-grow mb-6">
      {{ feature.description }}
    </p>

    <!-- Decorative elements -->
    <div
      class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-gray-50 dark:to-gray-900/20 rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    feature: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const iconBgClasses = computed(() => {
      return `bg-gradient-to-br ${props.feature.color || 'from-blue-500 to-cyan-500'}`;
    });

    const cardClasses = computed(() => {
      return props.feature.highlight ? 'ring-2 ring-blue-500' : '';
    });

    return {
      iconBgClasses,
      cardClasses
    };
  }
};
</script>

<style scoped>
/* Custom scrollbar for feature cards if needed */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}
</style>