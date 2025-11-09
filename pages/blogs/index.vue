<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <section class="pt-24 pb-16 gradient-bg text-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <i class="fas fa-blog mr-2 text-base"></i>
            <span class="text-sm font-medium">Financial Insights & Updates</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ABLX <span class="text-yellow-300">Blog</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
            Stay updated with the latest in African fintech, crypto trends, financial tips, and platform updates.
          </p>

          <!-- Blog Stats -->
          <div class="flex justify-center space-x-8 md:space-x-12 pt-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
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
          <div class="mb-16 fade-in">
            <div class="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
              <i class="fas fa-star mr-2 text-base"></i>
              <span class="text-sm font-semibold">Featured Article</span>
            </div>
            
            <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl card-hover">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="p-8 md:p-12">
                  <div class="flex items-center mb-4">
                    <span class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Crypto Trends
                    </span>
                    <span class="text-gray-500 text-sm ml-4">December 15, 2023</span>
                  </div>
                  
                  <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
                    The Future of Cryptocurrency in African Markets: 2024 Outlook
                  </h2>
                  
                  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                    Explore how cryptocurrency adoption is transforming financial landscapes across Africa. Learn about emerging trends, regulatory developments, and investment opportunities in the fastest-growing crypto market.
                  </p>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format" alt="David Adebayo" class="w-10 h-10 rounded-full mr-3">
                      <div>
                        <p class="font-semibold text-gray-800">David Adebayo</p>
                        <p class="text-gray-500 text-sm">Fintech Analyst</p>
                      </div>
                    </div>
                    <NuxtLink to="/blogs/future-cryptocurrency-africa-2024" class="inline-flex items-center gradient-bg text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Read More
                      <i class="fas fa-arrow-right ml-2"></i>
                    </NuxtLink>
                  </div>
                </div>
                
                <div class="relative min-h-80 lg:min-h-full">
                  <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop&auto=format" alt="Cryptocurrency in Africa" class="absolute inset-0 w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Blog Content Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-2">
              <!-- Category Filters -->
              <div class="flex flex-wrap gap-3 mb-8 fade-in">
                <button 
                  v-for="category in categories" 
                  :key="category.id"
                  @click="setActiveCategory(category.id)"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeCategory === category.id 
                      ? 'gradient-bg text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  ]"
                >
                  {{ category.name }}
                </button>
              </div>

              <!-- Blog Posts Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article 
                  v-for="post in filteredPosts" 
                  :key="post.id"
                  class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100 fade-in"
                >
                  <div class="relative h-48 overflow-hidden">
                    <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                    <div class="absolute top-4 left-4">
                      <span class="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                        {{ post.category }}
                      </span>
                    </div>
                  </div>
                  
                  <div class="p-6">
                    <div class="flex items-center text-gray-500 text-sm mb-3">
                      <span>{{ formatDate(post.date) }}</span>
                      <span class="mx-2">•</span>
                      <span>{{ post.readTime }}</span>
                      <span class="mx-2">•</span>
                      <div class="flex items-center">
                        <i class="fas fa-eye mr-1"></i>
                        <span>{{ post.views }}</span>
                      </div>
                    </div>
                    
                    <h3 class="text-xl font-bold mb-3 text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-300">
                      <NuxtLink :to="`/blogs/${post.slug}`">{{ post.title }}</NuxtLink>
                    </h3>
                    
                    <p class="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {{ post.excerpt }}
                    </p>
                    
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div class="flex items-center">
                        <img :src="post.author.avatar" :alt="post.author.name" class="w-8 h-8 rounded-full mr-3">
                        <span class="text-sm font-medium text-gray-700">{{ post.author.name }}</span>
                      </div>
                      <NuxtLink :to="`/blogs/${post.slug}`" class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors duration-300">
                        Read More
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Load More Button -->
              <div class="text-center mt-12 fade-in">
                <button 
                  @click="loadMorePosts"
                  class="px-8 py-3 gradient-bg text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  :disabled="loading"
                >
                  <span v-if="!loading" class="flex items-center">
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
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 fade-in">
                <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <i class="fas fa-search mr-3 text-blue-500"></i>
                  Search Articles
                </h3>
                <div class="relative">
                  <input 
                    v-model="searchQuery"
                    type="text" 
                    placeholder="Search blog posts..."
                    class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                  <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- Popular Posts -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 fade-in">
                <h3 class="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <i class="fas fa-fire mr-3 text-red-500"></i>
                  Popular Posts
                </h3>
                <div class="space-y-4">
                  <div 
                    v-for="post in popularPosts" 
                    :key="post.id"
                    class="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <img :src="post.image" :alt="post.title" class="w-16 h-16 rounded-lg object-cover mr-4 flex-shrink-0">
                    <div>
                      <h4 class="font-semibold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        <NuxtLink :to="`/blogs/${post.slug}`">{{ post.title }}</NuxtLink>
                      </h4>
                      <div class="flex items-center text-gray-500 text-xs">
                        <span>{{ formatDate(post.date) }}</span>
                        <span class="mx-2">•</span>
                        <div class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          <span>{{ post.views }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Categories -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 fade-in">
                <h3 class="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <i class="fas fa-folder mr-3 text-green-500"></i>
                  Categories
                </h3>
                <div class="space-y-3">
                  <button 
                    v-for="category in categories" 
                    :key="category.id"
                    @click="setActiveCategory(category.id)"
                    class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group w-full text-left"
                  >
                    <span class="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{{ category.name }}</span>
                    <span class="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                      {{ category.count }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Newsletter -->
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white fade-in">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 class="text-xl font-bold mb-3 text-yellow-300">Stay Updated</h3>
                  <p class="text-blue-100 mb-4 text-sm">
                    Get the latest fintech insights and platform updates delivered to your inbox.
                  </p>
                  <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                    <input 
                      v-model="email"
                      type="email" 
                      placeholder="Enter your email"
                      required
                      class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:bg-white/30 focus:border-white/50 transition-all duration-300"
                    >
                    <button 
                      type="submit"
                      class="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <p class="text-blue-100 text-xs mt-3 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              <!-- Tags -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 fade-in">
                <h3 class="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <i class="fas fa-tags mr-3 text-purple-500"></i>
                  Popular Tags
                </h3>
                <div class="flex flex-wrap gap-2">
                  <button 
                    v-for="tag in popularTags" 
                    :key="tag"
                    @click="searchByTag(tag)"
                    class="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                  >
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
const email = ref('')
const postsPerPage = 6
const currentPage = ref(1)

// Sample blog posts data with real images
const blogPosts = ref([
  {
    id: 1,
    title: 'How Blockchain Technology is Revolutionizing Cross-Border Payments in Africa',
    excerpt: 'Discover how blockchain is making international transfers faster, cheaper, and more secure for African businesses and individuals.',
    category: 'Blockchain',
    date: '2023-12-10',
    readTime: '5 min read',
    views: '2.4K',
    slug: 'blockchain-cross-border-payments-africa',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&auto=format',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format',
      role: 'Blockchain Expert'
    }
  },
  {
    id: 2,
    title: 'Top 5 Cryptocurrencies to Watch in African Markets for 2024',
    excerpt: 'Explore the most promising digital assets gaining traction across African markets and their potential impact on local economies.',
    category: 'Crypto Trends',
    date: '2023-12-08',
    readTime: '7 min read',
    views: '3.1K',
    slug: 'top-cryptocurrencies-africa-2024',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=400&h=250&fit=crop&auto=format',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
      role: 'Crypto Analyst'
    }
  },
  {
    id: 3,
    title: 'Financial Inclusion: How Digital Banking is Reaching Rural Africa',
    excerpt: 'Learn about innovative digital banking solutions that are bringing financial services to underserved communities across Africa.',
    category: 'Digital Banking',
    date: '2023-12-05',
    readTime: '6 min read',
    views: '1.8K',
    slug: 'financial-inclusion-digital-banking-rural-africa',
    image: 'https://images.unsplash.com/photo-1563017940-49c08f792f13?w=400&h=250&fit=crop&auto=format',
    author: {
      name: 'Amina Diallo',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face&auto=format',
      role: 'Financial Inclusion Advocate'
    }
  },
  {
    id: 4,
    title: 'Understanding Crypto Regulations in Nigeria and Kenya: A 2023 Update',
    excerpt: 'Stay compliant with the latest regulatory developments affecting cryptocurrency trading and usage in major African markets.',
    category: 'Regulation',
    date: '2023-12-03',
    readTime: '8 min read',
    views: '2.7K',
    slug: 'crypto-regulations-nigeria-kenya-2023',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&auto=format',
    author: {
      name: 'James Okafor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
      role: 'Legal Expert'
    }
  },
  {
    id: 5,
    title: 'The Rise of DeFi in Africa: Opportunities and Challenges',
    excerpt: 'Explore how decentralized finance is creating new financial opportunities while facing unique challenges in African contexts.',
    category: 'DeFi',
    date: '2023-11-28',
    readTime: '9 min read',
    views: '2.1K',
    slug: 'defi-africa-opportunities-challenges',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=250&fit=crop&auto=format',
    author: {
      name: 'Rachel Kim',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format',
      role: 'DeFi Specialist'
    }
  },
  {
    id: 6,
    title: 'Secure Your Crypto Assets: Best Practices for African Investors',
    excerpt: 'Essential security tips and best practices to protect your cryptocurrency investments in evolving African markets.',
    category: 'Security',
    date: '2023-11-25',
    readTime: '4 min read',
    views: '3.5K',
    slug: 'crypto-security-best-practices-africa',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=250&fit=crop&auto=format',
    author: {
      name: 'David Adebayo',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format',
      role: 'Security Expert'
    }
  }
])

// Categories
const categories = ref([
  { id: 'all', name: 'All Articles', count: 24 },
  { id: 'crypto', name: 'Crypto Trends', count: 8 },
  { id: 'blockchain', name: 'Blockchain', count: 5 },
  { id: 'defi', name: 'DeFi', count: 4 },
  { id: 'regulation', name: 'Regulation', count: 3 },
  { id: 'security', name: 'Security', count: 6 },
  { id: 'banking', name: 'Digital Banking', count: 7 }
])

// Popular posts with real images
const popularPosts = ref([
  {
    id: 1,
    title: 'Bitcoin Halving 2024: What African Investors Need to Know',
    date: '2023-12-12',
    views: '4.2K',
    slug: 'bitcoin-halving-2024-african-investors',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=80&h=80&fit=crop&auto=format'
  },
  {
    id: 2,
    title: 'How to Start Crypto Trading in Nigeria: Complete Beginner Guide',
    date: '2023-12-09',
    views: '3.8K',
    slug: 'crypto-trading-nigeria-beginner-guide',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&auto=format'
  },
  {
    id: 3,
    title: 'Central Bank Digital Currencies: Africa\'s Next Financial Revolution',
    date: '2023-12-06',
    views: '3.2K',
    slug: 'cbdc-africa-financial-revolution',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=80&h=80&fit=crop&auto=format'
  },
  {
    id: 4,
    title: 'Mobile Money vs Cryptocurrency: Which is Better for Africa?',
    date: '2023-12-01',
    views: '2.9K',
    slug: 'mobile-money-vs-cryptocurrency-africa',
    image: 'https://images.unsplash.com/photo-1563017940-49c08f792f13?w=80&h=80&fit=crop&auto=format'
  }
])

// Popular tags
const popularTags = ref([
  'Bitcoin', 'Ethereum', 'DeFi', 'NFT', 'Regulation', 'Security',
  'Trading', 'Investment', 'Blockchain', 'Web3', 'Fintech', 'Africa'
])

// Computed properties
const filteredPosts = computed(() => {
  let filtered = blogPosts.value

  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(post => 
      post.category.toLowerCase().includes(activeCategory.value.toLowerCase())
    )
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    )
  }

  // Pagination
  const startIndex = (currentPage.value - 1) * postsPerPage
  return filtered.slice(0, startIndex + postsPerPage)
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
  loading.value = true
  setTimeout(() => {
    currentPage.value++
    loading.value = false
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

onMounted(() => {
if (typeof window !== 'undefined') {
    const currentHost = window.location.hostname
    if (currentHost === config.public.blogSubdomain) {
      console.log('Running on blog subdomain')
      // You can add subdomain-specific logic here
    }
  }
  // Add scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
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

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
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
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>