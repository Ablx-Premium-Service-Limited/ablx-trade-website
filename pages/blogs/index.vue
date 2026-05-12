<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <section class="pt-16 pb-16 gradient-bg text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div
            class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <i class="fas fa-blog mr-2 text-base"></i>
            <span class="text-sm font-medium">Financial Insights & Updates</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ABLX <span class="italic">Blog</span>
          </h1>

          <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
            Stay updated with the latest in African fintech, crypto trends, financial tips, and platform updates.
          </p>

          <!-- Blog Stats -->
          <div class="flex justify-center space-x-8 md:space-x-12 pt-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">{{ totalPosts }}+</div>
              <div class="text-blue-100 text-xs md:text-sm">Articles Published</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
              <div class="text-blue-100 text-xs md:text-sm">Monthly Readers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div class="text-blue-100 text-xs md:text-sm">Expert Writers</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <!-- Featured Post -->
          <div v-if="featuredPost" class="mb-16">
            <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
              <i class="fas fa-star mr-2 text-base"></i>
              <span class="text-sm font-semibold">Featured Article</span>
            </div>

            <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl card-hover">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="p-8 md:p-12">
                  <div class="flex items-center mb-4">
                    <span
                      class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {{ featuredPost.tags[0] || 'Featured' }}
                    </span>
                    <span class="text-gray-500 text-sm ml-4">{{ formatDate(featuredPost.createdAt) }}</span>
                  </div>

                  <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
                    {{ featuredPost.title }}
                  </h2>

                  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                    {{ featuredPost.excerpt?.trim() || blogMetaDescription(featuredPost) || 'Read this featured article for the latest insights.' }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <img
                        :src="featuredPost.author.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format'"
                        :alt="featuredPost.author.name" class="w-10 h-10 rounded-full mr-3">
                      <div>
                        <p class="font-semibold text-gray-800">{{ featuredPost.author.name }}</p>
                        <p class="text-gray-500 text-sm">Author</p>
                      </div>
                    </div>
                    <NuxtLink :to="blogPathForPost(featuredPost)"
                      class="inline-flex items-center gradient-bg text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Read More
                      <i class="fas fa-arrow-right ml-2"></i>
                    </NuxtLink>
                  </div>
                </div>

                <div class="relative min-h-80 lg:min-h-full">
                  <img :src="featuredPost.coverImage" :alt="featuredPost.title"
                    class="absolute inset-0 w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Blog Posts State -->
          <div v-if="!loading && allPosts.length === 0" class="text-center py-16">
            <div class="max-w-md mx-auto">
              <div class="mb-8">
                <i class="fas fa-newspaper text-8xl text-gray-300 mb-6"></i>
              </div>
              <h2 class="text-3xl font-bold text-gray-800 mb-4">No Blog Posts Yet</h2>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                We're working on creating amazing content for you. Check back soon for the latest insights on African
                fintech, crypto trends, and financial tips.
              </p>
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">What to Expect</h3>
                <ul class="text-gray-600 text-left space-y-2">
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    Crypto market analysis and trends
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    Financial tips and investment strategies
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    Platform updates and feature releases
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Blog Content Layout -->
          <div v-if="allPosts.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-2">
              <!-- Category Filters -->
              <div class="flex flex-wrap gap-3 mb-8 ">
                <button v-for="category in categories" :key="category.id" @click="setActiveCategory(category.id)"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeCategory === category.id
                      ? 'gradient-bg text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  ]">
                  {{ category.name }}
                </button>
              </div>

              <!-- Loading State -->
              <div v-if="loading" class="text-center py-12">
                <div class="inline-flex items-center justify-center">
                  <i class="fas fa-spinner fa-spin text-3xl text-blue-500 mr-3"></i>
                  <span class="text-xl text-gray-600">Loading blog posts...</span>
                </div>
              </div>

              <!-- Blog Posts Grid -->
              <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article v-for="post in filteredPosts" :key="post.id"
                  class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100">
                  <div class="relative h-48 overflow-hidden">
                    <img :src="post.coverImage" :alt="post.title"
                      class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                    <div class="absolute top-4 left-4">
                      <span
                        class="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                        {{ post.tags[0] || 'General' }}
                      </span>
                    </div>
                  </div>

                  <div class="p-6">
                    <div class="flex items-center text-gray-500 text-sm mb-3">
                      <span>{{ formatDate(post.createdAt) }}</span>
                      <span class="mx-2">•</span>
                      <span>{{ calculateReadTime(post.content) }}</span>
                      <span class="mx-2">•</span>
                      <div class="flex items-center">
                        <i class="fas fa-eye mr-1"></i>
                        <span>{{ post.views || '1.2K' }}</span>
                      </div>
                    </div>

                    <h3
                      class="text-xl font-bold mb-3 text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-300">
                      <NuxtLink :to="blogPathForPost(post)">{{ post.title }}</NuxtLink>
                    </h3>

                    <p class="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {{ post.excerpt?.trim() || blogMetaDescription(post) || 'Read this article for valuable insights.' }}
                    </p>

                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div class="flex items-center">
                        <img
                          :src="post.author.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format'"
                          :alt="post.author.name" class="w-8 h-8 rounded-full mr-3">
                        <span class="text-sm font-medium text-gray-700">{{ post.author.name }}</span>
                      </div>
                      <NuxtLink :to="blogPathForPost(post)"
                        class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors duration-300">
                        Read More
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Empty State -->
              <div v-if="!loading && filteredPosts.length === 0" class="text-center py-12">
                <div class="max-w-md mx-auto">
                  <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                  <h3 class="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                  <p class="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
              </div>

              <!-- Load More Button -->
              <div v-if="!loading && filteredPosts.length > 0 && hasMorePosts" class="text-center mt-12">
                <button @click="loadMorePosts"
                  class="px-8 py-3 gradient-bg text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  :disabled="loadingMore">
                  <span v-if="!loadingMore" class="flex items-center">
                    <i class="fas fa-plus mr-2"></i>
                    Load More Articles
                  </span>
                  <span v-else class="flex items-center">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    Loading...
                  </span>
                </button>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-8">
              <!-- Search Box -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ">
                <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <i class="fas fa-search mr-3 text-blue-500"></i>
                  Search Articles
                </h3>
                <div class="relative">
                  <input v-model="searchQuery" type="text" placeholder="Search blog posts..."
                    class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                  <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- Popular Posts -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 class="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <i class="fas fa-fire mr-3 text-red-500"></i>
                  Popular Posts
                </h3>
                <div class="space-y-4">
                  <div v-for="post in popularPosts" :key="post.id"
                    class="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
                    <img :src="post.coverImage" :alt="post.title"
                      class="w-16 h-16 rounded-lg object-cover mr-4 flex-shrink-0">
                    <div>
                      <h4
                        class="font-semibold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        <NuxtLink :to="blogPathForPost(post)">{{ post.title }}</NuxtLink>
                      </h4>
                      <div class="flex items-center text-gray-500 text-xs">
                        <span>{{ formatDate(post.createdAt) }}</span>
                        <span class="mx-2">•</span>
                        <div class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          <span>{{ post.views || '1.2K' }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Categories -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ">
                <h3 class="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <i class="fas fa-folder mr-3 text-green-500"></i>
                  Categories
                </h3>
                <div class="space-y-3">
                  <button v-for="category in categories" :key="category.id" @click="setActiveCategory(category.id)"
                    class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group w-full text-left">
                    <span class="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{{
                      category.name }}</span>
                    <span
                      class="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                      {{ category.count }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Newsletter -->
              <!-- <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white ">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 class="text-xl font-bold mb-3 text-yellow-300">Stay Updated</h3>
                  <p class="text-blue-100 mb-4 text-sm">
                    Get the latest fintech insights and platform updates delivered to your inbox.
                  </p>
                  <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                    <input v-model="email" type="email" placeholder="Enter your email" required
                      class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:bg-white/30 focus:border-white/50 transition-all duration-300">
                    <button type="submit"
                      class="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Subscribe Now
                    </button>
                  </form>
                  <p class="text-blue-100 text-xs mt-3 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div> -->

              <!-- Tags -->
              <div v-if="popularTags.length > 0" class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ">
                <h3 class="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <i class="fas fa-tags mr-3 text-purple-500"></i>
                  Popular Tags
                </h3>
                <div class="flex flex-wrap gap-2">
                  <button v-for="tag in popularTags" :key="tag" @click="searchByTag(tag)"
                    class="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300">
                    #{{ tag }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { blogPathForPost, blogMetaDescription } from '#blog-slug'

// SEO Configuration
useSeoMeta({
  title: 'Blog | ABLX Fintech - Financial Insights, Crypto Trends & Fintech News',
  description: 'Stay updated with ABLX Blog - Latest fintech insights, cryptocurrency trends, financial tips, and platform updates for African markets.',
  ogTitle: 'ABLX Fintech Blog - Financial Insights & Crypto Trends',
  ogDescription: 'Latest fintech insights, cryptocurrency trends, and financial tips from ABLX - Africa\'s leading financial platform.',
  ogImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=630&fit=crop&auto=format',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://ablxtrade.com/blogs'
    }
  ]
})

const route = useRoute()
const config = useRuntimeConfig()

// Reactive data
const activeCategory = ref('all')
const searchQuery = ref('')
const loading = ref(false)
const loadingMore = ref(false)
const email = ref('')
const postsPerPage = 6
const currentPage = ref(1)
const allPosts = ref([])
const totalPosts = ref(0)

// Categories
const categories = ref([
  { id: 'all', name: 'All Articles', count: 0 },
  { id: 'crypto', name: 'Crypto Trends', count: 0 },
  { id: 'blockchain', name: 'Blockchain', count: 0 },
  { id: 'defi', name: 'DeFi', count: 0 },
  { id: 'regulation', name: 'Regulation', count: 0 },
  { id: 'security', name: 'Security', count: 0 },
  { id: 'banking', name: 'Digital Banking', count: 0 }
])

// Popular tags - will be dynamically populated
const popularTags = ref([])

// Computed properties
const featuredPost = computed(() => {
  return allPosts.value.length > 0 ? allPosts.value[0] : null
})

const filteredPosts = computed(() => {
  let filtered = allPosts.value

  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(post => {
      if (!post.tags) return false
      return post.tags.some(tag =>
        tag.toLowerCase().includes(activeCategory.value.toLowerCase())
      )
    })
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query) ||
      (post.description && String(post.description).toLowerCase().includes(query)) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
    )
  }

  // Pagination
  const startIndex = (currentPage.value - 1) * postsPerPage
  return filtered.slice(0, startIndex + postsPerPage)
})

const popularPosts = computed(() => {
  // For now, return the first few posts as popular
  // In a real app, you'd have a popularity metric
  return allPosts.value.slice(0, 4)
})

const hasMorePosts = computed(() => {
  return filteredPosts.value.length < allPosts.value.length
})

// Methods
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
  currentPage.value = 1
}

const searchByTag = (tag) => {
  searchQuery.value = tag
  activeCategory.value = 'all'
}

const loadMorePosts = () => {
  loadingMore.value = true
  setTimeout(() => {
    currentPage.value++
    loadingMore.value = false
  }, 1000)
}

const subscribeNewsletter = () => {
  if (email.value) {
    // Simulate API call
    loading.value = true
    setTimeout(() => {
      alert(`Thank you for subscribing with ${email.value}! We'll keep you updated with our latest insights.`)
      email.value = ''
      loading.value = false
    }, 1500)
  }
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

const calculateReadTime = (content) => {
  if (!content) return '3 min read'

  // Simple calculation: 200 words per minute
  const wordCount = content.split(' ').length
  const readTime = Math.ceil(wordCount / 200)
  return `${readTime} min read`
}

const extractPopularTags = () => {
  const allTags = []

  // Collect all tags from all posts
  allPosts.value.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      allTags.push(...post.tags)
    }
  })

  // Count tag frequency
  const tagCounts = {}
  allTags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1
  })

  // Get unique tags sorted by frequency (most popular first)
  const uniqueTags = [...new Set(allTags)]
    .sort((a, b) => tagCounts[b] - tagCounts[a])
    .slice(0, 12) // Limit to 12 most popular tags

  popularTags.value = uniqueTags
}

const fetchBlogPosts = async () => {
  loading.value = true
  try {
    // Fetch from your posts.json file
    const response = await fetch('/api/blog/posts')
    const data = await response.json()

    allPosts.value = data.posts.filter(post => post.status === 'published');
    totalPosts.value = allPosts.value.length;

    // Update category counts based on actual data
    updateCategoryCounts()

    // Extract popular tags from posts
    extractPopularTags()
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  } finally {
    loading.value = false
  }
}

const updateCategoryCounts = () => {
  // Reset counts
  categories.value.forEach(cat => {
    if (cat.id !== 'all') {
      cat.count = 0
    }
  })

  // Count posts per category
  allPosts.value.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        const category = categories.value.find(cat =>
          cat.id !== 'all' && tag.toLowerCase().includes(cat.id.toLowerCase())
        )
        if (category) {
          category.count++
        }
      })
    }
  })

  // Update "All Articles" count
  const allCategory = categories.value.find(cat => cat.id === 'all')
  if (allCategory) {
    allCategory.count = allPosts.value.length
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    const currentHost = window.location.hostname
    if (currentHost === config.public.blogSubdomain) {
      console.log('Running on blog subdomain')
      // You can add subdomain-specific logic here
    }
  }

  // Fetch blog posts
  fetchBlogPosts()
})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #00AAFD 0%, #2E53B0 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #00AAFD 0%, #2E53B0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced container padding */
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Loading animation */
.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>