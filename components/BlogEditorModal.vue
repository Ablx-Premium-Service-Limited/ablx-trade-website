<template>
    <CustomModal v-model="isOpen" @close="close" :title="post ? 'Edit Blog Post' : 'Create New Blog Post'">
        <form @submit.prevent="savePost" class="space-y-6">
            <!-- Title -->
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Post Title *</label>
                <input type="text" id="title" v-model="form.title" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter post title" />
            </div>

            <!-- Description (SEO / summaries) -->
            <div>
                <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea id="description" v-model="form.description" rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Short summary for search and social previews. If empty, the post title is used." />
                <p class="text-xs text-gray-500 mt-1">Used in meta tags; leave blank to use the title instead.</p>
            </div>

            <!-- Author Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Author Name -->
                <div>
                    <label for="authorName" class="block text-sm font-medium text-gray-700 mb-2">Author Name *</label>
                    <input type="text" id="authorName" v-model="form.author.name" required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Author name" />
                </div>

                <!-- Author Photo -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Author Photo</label>
                    <div class="flex items-center space-x-4">
                        <div v-if="form.author.photo" class="flex-shrink-0">
                            <img :src="form.author.photo" class="h-16 w-16 rounded-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <input type="file" ref="authorPhotoInput" accept="image/*" @change="handleAuthorPhotoUpload"
                                class="hidden" />
                            <button type="button" @click="$refs.authorPhotoInput.click()"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                                {{ form.author.photo ? 'Change Photo' : 'Upload Photo' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cover Image -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Image *</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div v-if="form.coverImage" class="mb-4">
                        <img :src="form.coverImage" class="max-h-48 mx-auto rounded-lg object-cover" />
                    </div>
                    <input type="file" ref="coverImageInput" accept="image/*" @change="handleCoverImageUpload"
                        class="hidden" />
                    <button type="button" @click="$refs.coverImageInput.click()"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <i class="fas fa-upload mr-2"></i>
                        {{ form.coverImage ? 'Change Cover Image' : 'Upload Cover Image' }}
                    </button>
                    <p class="text-sm text-gray-500 mt-2">Recommended size: 1200x630px</p>
                </div>
            </div>

            <!-- Tags -->
            <div>
                <label for="tags" class="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <div class="flex flex-wrap gap-2 mb-2">
                    <span v-for="tag in form.tags" :key="tag"
                        class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {{ tag }}
                        <button type="button" @click="removeTag(tag)" class="ml-2 text-blue-600 hover:text-blue-800">
                            <i class="fas fa-times text-xs"></i>
                        </button>
                    </span>
                </div>
                <div class="flex space-x-2">
                    <input type="text" v-model="newTag" @keydown.enter.prevent="addTag"
                        class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add a tag and press Enter" />
                    <button type="button" @click="addTag"
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        Add
                    </button>
                </div>
            </div>

            <!-- Quill Editor -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                <QuillEditor v-model="form.content" :placeholder="'Write your amazing blog content here...'"
                    @update:modelValue="updateExcerpt" />
            </div>

            <!-- Status and Actions -->
            <div class="flex justify-between items-center pt-6 border-t border-gray-200">
                <div>
                    <label for="status" class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select id="status" v-model="form.status"
                        class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <div class="flex space-x-3">
                    <button type="button" @click="close"
                        class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" :disabled="isSaving"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        <i v-if="isSaving" class="fas fa-spinner fa-spin mr-2"></i>
                        {{ isSaving ? 'Saving...' : (post ? 'Update Post' : 'Publish Post') }}
                    </button>
                </div>
            </div>
        </form>
    </CustomModal>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: Boolean,
    post: Object
})

const emit = defineEmits(['update:modelValue', 'saved', 'closed'])

// Refs
const isOpen = ref(false)
const isSaving = ref(false)
const newTag = ref('')
const authorPhotoInput = ref(null)
const coverImageInput = ref(null)

// Form data
const form = ref({
    title: '',
    description: '',
    author: {
        name: '',
        photo: ''
    },
    coverImage: '',
    tags: [],
    content: '',
    status: 'draft',
    excerpt: ''
})

// Cloudinary configuration
const cloudinaryConfig = {
    cloudName: 'campnet', // Replace with your Cloudinary cloud name
    uploadPreset: 'test-preset' // Replace with your upload preset
}

// Watchers
watch(() => props.modelValue, (val) => {
    isOpen.value = val
})

watch(() => props.post, (val) => {
    if (val) {
        const { metaDescription: _md, ...rest } = val
        form.value = {
            ...rest,
            description: val.description != null ? String(val.description) : '',
            author: { name: '', photo: '', ...val.author },
            tags: Array.isArray(val.tags) ? [...val.tags] : []
        }
    } else {
        resetForm()
    }
})

// Methods
const resetForm = () => {
    form.value = {
        title: '',
        description: '',
        author: {
            name: '',
            photo: ''
        },
        coverImage: '',
        tags: [],
        content: '',
        status: 'draft',
        excerpt: ''
    }
    newTag.value = ''
}

const close = () => {
    isOpen.value = false
    emit('update:modelValue', false)
    emit('closed')
}

const addTag = () => {
    if (newTag.value.trim() && !form.value.tags.includes(newTag.value.trim())) {
        form.value.tags.push(newTag.value.trim())
        newTag.value = ''
    }
}

const removeTag = (tag) => {
    form.value.tags = form.value.tags.filter(t => t !== tag)
}

const updateExcerpt = () => {
    // Generate excerpt from plain text (strip HTML tags)
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = form.value.content
    const textContent = tempDiv.textContent || tempDiv.innerText || ''
    form.value.excerpt = textContent.slice(0, 150) + (textContent.length > 150 ? '...' : '')
}

const uploadToCloudinary = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', cloudinaryConfig.uploadPreset)

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
            {
                method: 'POST',
                body: formData
            }
        )

        if (!response.ok) throw new Error('Upload failed')

        const data = await response.json()
        return data.secure_url
    } catch (error) {
        console.error('Cloudinary upload error:', error)
        throw error
    }
}

const handleAuthorPhotoUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
        try {
            const imageUrl = await uploadToCloudinary(file)
            form.value.author.photo = imageUrl
        } catch (error) {
            alert('Failed to upload author photo. Please try again.')
        }
    }
}

const handleCoverImageUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
        try {
            const imageUrl = await uploadToCloudinary(file)
            form.value.coverImage = imageUrl
        } catch (error) {
            alert('Failed to upload cover image. Please try again.')
        }
    }
}

const savePost = async () => {
    if (!form.value.title || !form.value.content || form.value.content === '<p><br></p>') {
        alert('Please fill in all required fields.')
        return
    }

    isSaving.value = true

    try {
        // Emit the saved data
        emit('saved', {
            ...form.value,
            updatedAt: new Date().toISOString()
        })

        close()
    } catch (error) {
        console.error('Error saving post:', error)
        alert('Failed to save post. Please try again.')
    } finally {
        isSaving.value = false
    }
}
</script>