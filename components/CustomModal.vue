<template>
    <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75" @click="close"></div>

        <!-- Simple centered modal that scrolls with page -->
        <div class="relative flex items-center justify-center min-h-screen p-4">
            <div class="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl">
                <!-- Header -->
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900">
                        <slot name="header">{{ title }}</slot>
                    </h3>
                    <button @click="close" class="text-gray-400 hover:text-gray-600 transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>

                <!-- Content -->
                <div class="p-6">
                    <slot></slot>
                </div>

                <!-- Footer -->
                <div v-if="$slots.footer" class="flex justify-end space-x-3 p-6 border-t border-gray-200">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: Boolean,
    title: String
})

const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}
</script>