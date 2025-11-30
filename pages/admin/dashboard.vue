<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Admin Header -->
        <header class="bg-white shadow-sm border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <div class="flex items-center">
                        <h1 class="text-2xl font-bold text-gray-800">
                            ABLX <span class="gradient-text">Blog Admin</span>
                        </h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-600">Welcome, {{ adminUser?.name || 'Admin' }}</span>
                        <button @click="handleLogout"
                            class="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                            :disabled="isLoggingOut">
                            <i v-if="isLoggingOut" class="fas fa-spinner fa-spin mr-2"></i>
                            <i v-else class="fas fa-sign-out-alt mr-2"></i>
                            {{ isLoggingOut ? 'Logging out...' : 'Logout' }}
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <!-- Stats Overview -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-lg shadow p-6 border border-gray-100">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 p-3 rounded-lg bg-blue-500">
                                <i class="fas fa-file-alt text-white text-lg"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500">Total Posts</p>
                                <p class="text-2xl font-bold text-gray-900">{{ stats.totalPosts }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow p-6 border border-gray-100">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 p-3 rounded-lg bg-green-500">
                                <i class="fas fa-check-circle text-white text-lg"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500">Published</p>
                                <p class="text-2xl font-bold text-gray-900">{{ stats.publishedPosts }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow p-6 border border-gray-100">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 p-3 rounded-lg bg-yellow-500">
                                <i class="fas fa-edit text-white text-lg"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500">Drafts</p>
                                <p class="text-2xl font-bold text-gray-900">{{ stats.draftPosts }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow p-6 border border-gray-100">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 p-3 rounded-lg bg-purple-500">
                                <i class="fas fa-tags text-white text-lg"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-500">Total Tags</p>
                                <p class="text-2xl font-bold text-gray-900">{{ stats.totalTags }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-semibold text-gray-800">Blog Posts</h2>
                    <button @click="showCreateModal = true"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
                        <i class="fas fa-plus mr-2"></i>
                        New Post
                    </button>
                </div>

                <!-- Blog Posts Table -->
                <div class="bg-white shadow rounded-lg overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Post</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Author</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tags</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="post in blogPosts" :key="post.id" class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img v-if="post.coverImage" :src="post.coverImage"
                                            class="h-10 w-10 rounded-lg object-cover mr-3" />
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">{{ post.title }}</div>
                                            <div class="text-sm text-gray-500 truncate max-w-xs">{{ post.excerpt }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img v-if="post.author.photo" :src="post.author.photo"
                                            class="h-8 w-8 rounded-full mr-2" />
                                        <span class="text-sm text-gray-900">{{ post.author.name }}</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex flex-wrap gap-1">
                                        <span v-for="tag in post.tags.slice(0, 2)" :key="tag"
                                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                            {{ tag }}
                                        </span>
                                        <span v-if="post.tags.length > 2" class="text-xs text-gray-500">
                                            +{{ post.tags.length - 2 }} more
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span :class="getStatusClass(post.status)"
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                                        {{ post.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {{ formatDate(post.createdAt) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button @click="editPost(post)"
                                        class="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                                    <button @click="deletePost(post.id)"
                                        class="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Empty State -->
                <div v-if="blogPosts.length === 0" class="text-center py-12">
                    <i class="fas fa-file-alt text-gray-400 text-6xl mb-4"></i>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                    <p class="text-gray-500 mb-4">Get started by creating your first blog post.</p>
                    <button @click="showCreateModal = true"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center mx-auto transition-colors">
                        <i class="fas fa-plus mr-2"></i>
                        Create Post
                    </button>
                </div>
            </div>
        </main>

        <!-- Create/Edit Blog Post Modal -->
        <BlogEditorModal v-model="showCreateModal" :post="editingPost" @saved="handlePostSaved"
            @closed="handleModalClosed" />

        <!-- Loading Overlay -->
        <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <i class="fas fa-spinner fa-spin text-blue-600 text-2xl mr-3"></i>
                <span>Loading...</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
    middleware: 'admin-auth-server'
})

const router = useRouter()

// State
const adminUser = ref(JSON.parse(localStorage.getItem('adminUser') || '{}'))
const blogPosts = ref([])
const showCreateModal = ref(false)
const editingPost = ref(null)
const loading = ref(false)
const isLoggingOut = ref(false)

// Stats
const stats = computed(() => {
    const totalPosts = blogPosts.value.length
    const publishedPosts = blogPosts.value.filter(post => post.status === 'published').length
    const draftPosts = blogPosts.value.filter(post => post.status === 'draft').length
    const allTags = blogPosts.value.flatMap(post => post.tags)
    const uniqueTags = [...new Set(allTags)]

    return {
        totalPosts,
        publishedPosts,
        draftPosts,
        totalTags: uniqueTags.length
    }
})

// Methods
const getStatusClass = (status) => {
    const classes = {
        published: 'bg-green-100 text-green-800',
        draft: 'bg-yellow-100 text-yellow-800',
        archived: 'bg-gray-100 text-gray-800'
    }
    return classes[status] || 'bg-gray-100 text-gray-800'
}

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

const loadBlogPosts = async () => {
    loading.value = true
    try {
        // Load from the JSON file in public folder
        const response = await fetch('/blog/posts.json')
        if (response.ok) {
            const data = await response.json()
            blogPosts.value = data.posts || []
        } else {
            // If file doesn't exist, start with empty array
            blogPosts.value = []
        }
    } catch (error) {
        console.error('Error loading blog posts:', error)
        blogPosts.value = []
    } finally {
        loading.value = false
    }
}

const saveBlogPosts = async () => {
    try {
        await $fetch('/api/blog/save-post', {
            method: 'POST',
            body: { posts: blogPosts.value }
        })

    } catch (error) {
        console.error('Error saving blog posts:', error)
        throw error
    }
}

const editPost = (post) => {
    editingPost.value = { ...post }
    showCreateModal.value = true
}

const deletePost = async (postId) => {
    if (confirm('Are you sure you want to delete this post?')) {
        loading.value = true
        try {
            blogPosts.value = blogPosts.value.filter(post => post.id !== postId)
            await saveBlogPosts()
        } catch (error) {
            alert('Failed to delete post. Please try again.')
        } finally {
            loading.value = false
        }
    }
}

const handlePostSaved = async (postData) => {
    loading.value = true
    try {
        if (editingPost.value) {
            // Update existing post
            const index = blogPosts.value.findIndex(p => p.id === editingPost.value.id)
            if (index !== -1) {
                blogPosts.value[index] = {
                    ...postData,
                    updatedAt: new Date().toISOString()
                }
            }
        } else {
            // Add new post
            blogPosts.value.unshift({
                ...postData,
                id: generateId(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            })
        }

        await saveBlogPosts()
        handleModalClosed()
    } catch (error) {
        alert('Failed to save post. Please try again.')
    } finally {
        loading.value = false
    }
}

const handleModalClosed = () => {
    showCreateModal.value = false
    editingPost.value = null
}

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const handleLogout = async () => {
    isLoggingOut.value = true

    try {
        await $fetch('/api/admin/logout', {
            method: 'POST'
        })

        // Redirect to login page
        await router.push('/admin/login')
    } catch (error) {
        console.error('Logout error:', error)
        // Still redirect to login even if API call fails
        await router.push('/admin/login')
    } finally {
        isLoggingOut.value = false
    }
}

// Load user data on mount
onMounted(async () => {
    try {
        const { user } = await $fetch('/api/admin/me')
        adminUser.value = user;
        loadBlogPosts()
    } catch (error) {
        console.error('Failed to load user data:', error)
        // If we can't load user data, user might not be authenticated
        await router.push('/admin/login')
    }
});
</script>

<style scoped>
.gradient-text {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>