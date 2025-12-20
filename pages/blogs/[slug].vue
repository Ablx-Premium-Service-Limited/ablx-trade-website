<template>
    <!-- Template remains exactly the same - no changes -->
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <!-- Navigation -->
        <Navigation />

        <!-- Loading State -->
        <div v-if="loading" class="min-h-screen flex items-center justify-center">
            <div class="text-center">
                <i class="fas fa-spinner fa-spin text-4xl text-blue-500 mb-4"></i>
                <p class="text-xl text-gray-600">Loading article...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="min-h-screen flex items-center justify-center">
            <div class="text-center max-w-md mx-auto">
                <i class="fas fa-exclamation-triangle text-6xl text-red-500 mb-4"></i>
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
                <p class="text-gray-600 mb-6">The article you're looking for doesn't exist or may have been moved.</p>
                <NuxtLink to="/blogs"
                    class="gradient-bg text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Back to Blog
                </NuxtLink>
            </div>
        </div>

        <!-- Blog Content -->
        <div v-else-if="post">
            <!-- Blog Header -->
            <section class="md:pt-24 pt-10 pb-6 bg-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="max-w-7xl mx-auto">
                        <!-- Breadcrumb -->
                        <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 ">
                            <NuxtLink to="/" class="hover:text-blue-600 transition-colors">Home</NuxtLink>
                            <i class="fas fa-chevron-right text-xs"></i>
                            <NuxtLink to="/blogs" class="hover:text-blue-600 transition-colors">Blog</NuxtLink>
                            <i class="fas fa-chevron-right text-xs"></i>
                            <span class="text-gray-800 font-medium">{{ post.tags?.[0] || 'General' }}</span>
                        </nav>

                        <!-- Article Header -->
                        <article class="">
                            <div class="flex items-center mb-6">
                                <span
                                    class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                                    {{ post.tags?.[0] || 'General' }}
                                </span>
                                <span class="text-gray-500 text-sm ml-4">{{ formatDate(post.createdAt) }}</span>
                                <div class="flex items-center text-gray-500 text-sm ml-4">
                                    <i class="fas fa-eye mr-1"></i>
                                    <span>{{ post.views || '1.2K' }}</span>
                                </div>
                                <div class="flex items-center text-gray-500 text-sm ml-4">
                                    <i class="fas fa-clock mr-1"></i>
                                    <span>{{ calculateReadTime(post.content) }}</span>
                                </div>
                            </div>

                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                                {{ post.title }}
                            </h1>

                        </article>
                    </div>
                </div>
            </section>

            <!-- Featured Image -->
            <section v-if="post.coverImage" class="py-8 bg-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="max-w-4xl mx-auto ">
                        <div class="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                            <img :src="post.coverImage" :alt="post.title" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Article Content -->
            <section class="py-16 bg-white">
                <div class="container px-4 sm:px-6">
                    <div class="max-w-7xl mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            <!-- Main Content -->
                            <div class="lg:col-span-3">
                                <article class="prose prose-lg max-w-none ">
                                    <!-- Dynamic Content from JSON -->
                                    <div v-if="post.content" v-html="post.content" class="blog-content"
                                        ref="contentElement"></div>

                                    <!-- Fallback Content -->
                                    <div v-else>
                                        <!-- Introduction -->
                                        <div id="introduction" class="mb-12">
                                            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                                                This article provides valuable insights into current trends and
                                                developments in the financial technology space.
                                            </p>
                                        </div>

                                        <!-- Key Points -->
                                        <div class="bg-blue-50 rounded-2xl p-8 mb-12">
                                            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <i class="fas fa-key mr-3 text-blue-500"></i>
                                                Key Takeaways
                                            </h3>
                                            <ul class="space-y-4">
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-lg"></i>
                                                    <span class="text-gray-700">Important insights and analysis</span>
                                                </li>
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-lg"></i>
                                                    <span class="text-gray-700">Current market trends and
                                                        developments</span>
                                                </li>
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-lg"></i>
                                                    <span class="text-gray-700">Future outlook and predictions</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <!-- Conclusion -->
                                        <div id="conclusion" class="mb-12">
                                            <h2 class="text-3xl font-bold text-gray-800 mb-6">Conclusion</h2>
                                            <p class="text-gray-700 mb-6 leading-relaxed">
                                                The financial technology landscape continues to evolve rapidly, offering
                                                new opportunities and challenges for investors and users alike.
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Call to Action -->
                                    <div
                                        class="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                                        <h3 class="text-2xl font-bold text-gray-800 mb-4">Start Your Crypto Journey
                                            Today
                                        </h3>
                                        <p class="text-gray-700 mb-6">
                                            Ready to explore cryptocurrency opportunities in Africa? ABLX provides
                                            secure,
                                            user-friendly platforms for trading and managing your digital assets.
                                        </p>
                                        <div class="flex flex-col w-full sm:justify-center sm:flex-row gap-4"
                                            ref="buttons">
                                            <a href="https://apps.apple.com/ng/app/ablxtrade-giftcards-crypto/id6476493549"
                                                class="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105">
                                                <i class="fab fa-apple mr-3 text-xl"></i>
                                                <div class="text-left">
                                                    <div class="text-xs opacity-70">Download on</div>
                                                    <div>App Store</div>
                                                </div>
                                            </a>

                                            <a href="https://play.google.com/store/apps/details?id=app.ablxtrade.com"
                                                class="group px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105">
                                                <i class="fab fa-google-play mr-3 text-xl"></i>
                                                <div class="text-left">
                                                    <div class="text-xs opacity-70">Get it on</div>
                                                    <div>Google Play</div>
                                                </div>
                                            </a>

                                            <a href="https://app.ablxtrade.com" target="_blank"
                                                class="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105 border-2 border-yellow-400">
                                                <i class="fas fa-rocket mr-3 text-xl"></i>
                                                <div class="text-left">
                                                    <div class="text-xs opacity-70">Launch</div>
                                                    <div>Web App</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </article>

                                <!-- Article Actions -->
                                <div class="flex items-center justify-between py-8 border-t border-gray-200 mt-12">
                                    <div class="flex items-center space-x-4">
                                        <span class="text-gray-600">Share this article:</span>
                                        <div class="flex space-x-2">
                                            <button @click="shareOnTwitter"
                                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                                <i class="fab fa-twitter"></i>
                                            </button>
                                            <button @click="shareOnLinkedIn"
                                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                                <i class="fab fa-linkedin-in"></i>
                                            </button>
                                            <button @click="shareOnFacebook"
                                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>
                                            <button @click="copyLink"
                                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                                <i class="fas fa-link"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button @click="toggleBookmark"
                                        class="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                                        <i :class="isBookmarked ? 'fas text-yellow-500' : 'far'"
                                            class="fa-bookmark mr-2"></i>
                                        {{ isBookmarked ? 'Saved' : 'Save for later' }}
                                    </button>
                                </div>
                            </div>

                            <!-- Sidebar -->
                            <div class="lg:col-span-1">
                                <div class="sticky top-24 space-y-8">
                                    <!-- Table of Contents -->
                                    <div v-if="tableOfContents.length > 0"
                                        class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                            <i class="fas fa-list-ol mr-3 text-blue-500"></i>
                                            Contents
                                        </h3>
                                        <nav class="space-y-2">
                                            <a v-for="item in tableOfContents" :key="item.id" :href="`#${item.id}`"
                                                class="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-b-0"
                                                @click="scrollToSection">
                                                {{ item.text }}
                                            </a>
                                        </nav>
                                    </div>

                                    <!-- Related Posts -->
                                    <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                            <i class="fas fa-newspaper mr-3 text-green-500"></i>
                                            Related Articles
                                        </h3>
                                        <div class="space-y-4">
                                            <div v-for="related in relatedPosts" :key="related.id"
                                                class="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
                                                <img :src="related.coverImage" :alt="related.title"
                                                    class="w-16 h-16 rounded-lg object-cover mr-4 flex-shrink-0">
                                                <div>
                                                    <h4
                                                        class="font-semibold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                                        <NuxtLink :to="`/blogs/${related.id}`">{{ related.title }}
                                                        </NuxtLink>
                                                    </h4>
                                                    <div class="flex items-center text-gray-500 text-xs">
                                                        <span>{{ formatDate(related.createdAt) }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Author Bio -->
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ">
                            <div class="flex items-start">
                                <img :src="post.author?.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format'"
                                    :alt="post.author?.name" class="w-20 h-20 rounded-full mr-6">
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-gray-800 mb-2">About the Author</h3>
                                    <h4 class="text-lg font-semibold text-blue-600 mb-2">{{ post.author?.name }}</h4>
                                    <div class="flex items-center space-x-4">
                                        <span class="text-gray-500 text-sm">Follow:</span>
                                        <div class="flex space-x-3">
                                            <a href="https://x.com/ablxtrade?s=11&t=0wg6bruDtVmOhaFsfSg3TQ"
                                                class="text-gray-400 hover:text-blue-600 transition-colors">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/ablxtrade/"
                                                class="text-gray-400 hover:text-blue-600 transition-colors">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="https://www.instagram.com/ablxtrade/?igshid=MzRlODBiNWFlZA%3D%3D"
                                                class="text-gray-400 hover:text-blue-600 transition-colors">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- More Articles -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="max-w-7xl mx-auto">
                        <div class="text-center mb-12">
                            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                                More <span class="gradient-text">Articles</span> You Might Like
                            </h2>
                            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                                Explore more insights about cryptocurrency, blockchain, and financial technology in
                                Africa.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <article v-for="article in moreArticles" :key="article.id"
                                class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100 ">
                                <div class="relative h-48 overflow-hidden">
                                    <img :src="article.coverImage" :alt="article.title"
                                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                                    <div class="absolute top-4 left-4">
                                        <span
                                            class="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {{ article.tags?.[0] || 'General' }}
                                        </span>
                                    </div>
                                </div>

                                <div class="p-6">
                                    <h3
                                        class="text-xl font-bold mb-3 text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-300">
                                        <NuxtLink :to="`/blogs/${article.id}`">{{ article.title }}</NuxtLink>
                                    </h3>

                                    <p class="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                                        {{ article.excerpt || 'Read this article for valuable insights.' }}
                                    </p>

                                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div class="flex items-center">
                                            <img :src="article.author?.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format'"
                                                :alt="article.author?.name" class="w-8 h-8 rounded-full mr-3">
                                            <span class="text-sm font-medium text-gray-700">{{ article.author?.name ||
                                                'ABLX Team' }}</span>
                                        </div>
                                        <NuxtLink :to="`/blogs/${article.id}`"
                                            class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors duration-300">
                                            Read More
                                            <i class="fas fa-arrow-right ml-1 text-xs"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
    import { useRuntimeConfig } from '#imports'
    
    // Get the route parameter
    const route = useRoute()
    const blogId = route.params.slug
    const config = useRuntimeConfig()
    
    // Reactive data
    const email = ref('')
    const isSubscribing = ref(false)
    const isBookmarked = ref(false)
    const loading = ref(true)
    const error = ref(false)
    const post = ref(null)
    const allPosts = ref([])
    const relatedPosts = ref([])
    const moreArticles = ref([])
    const tableOfContents = ref([])
    const contentElement = ref(null)
    
    // Site URL configuration
    const siteUrl = config.public.siteUrl || 'https://ablxtrade.com'
    const currentUrl = computed(() => `${siteUrl}/blogs/${blogId}`)
    
    // Dynamic SEO Meta
    const seoTitle = computed(() => 
      post.value ? `${post.value.title} | ABLX Fintech Blog` : 'ABLX Fintech Blog'
    )
    
    const seoDescription = computed(() => 
      post.value?.excerpt || post.value?.description || 
      'Read insightful articles about financial technology, cryptocurrency trends, and trading strategies on ABLX Fintech Blog.'
    )
    
    const seoImage = computed(() => 
      post.value?.coverImage || post.value?.featuredImage || 
      `${siteUrl}/images/blog-og-default.jpg`
    )
    
    const seoKeywords = computed(() => 
      post.value?.keywords || post.value?.tags?.join(', ') || 
      'cryptocurrency, fintech, trading, blockchain, digital assets, finance'
    )
    
    // Structured Data for Rich Results
    const structuredData = computed(() => {
      if (!post.value) return null
      
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.value.title,
        "description": seoDescription.value,
        "image": seoImage.value,
        "author": {
          "@type": "Organization",
          "name": "ABLX Trade",
          "url": siteUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "ABLX Trade",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/favi.png`
          }
        },
        "datePublished": post.value.publishedAt || post.value.createdAt,
        "dateModified": post.value.updatedAt || post.value.publishedAt || post.value.createdAt,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl.value
        },
        "keywords": seoKeywords.value,
        "wordCount": post.value.content ? post.value.content.split(' ').length : 0,
        "timeRequired": `PT${calculateReadTime(post.value.content).replace(' min read', 'M')}`,
        "url": currentUrl.value,
        "articleSection": post.value.category || "Fintech"
      }
    })
    
    // Breadcrumb Structured Data
    const breadcrumbData = computed(() => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${siteUrl}/blogs`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.value?.title || "Article",
          "item": currentUrl.value
        }
      ]
    }))
    
    // Apply SEO Meta
    watchEffect(() => {
      useSeoMeta({
        // Basic Meta
        title: seoTitle.value,
        description: seoDescription.value,
        
        // Open Graph
        ogTitle: seoTitle.value,
        ogDescription: seoDescription.value,
        ogImage: seoImage.value,
        ogImageAlt: post.value?.title || 'ABLX Fintech Blog Article',
        ogUrl: currentUrl.value,
        ogType: 'article',
        ogSiteName: 'ABLX Trade',
        ogLocale: 'en_US',
        
        // Twitter
        twitterCard: 'summary_large_image',
        twitterTitle: seoTitle.value,
        twitterDescription: seoDescription.value,
        twitterImage: seoImage.value,
        twitterSite: '@ablxtrade',
        twitterCreator: '@ablxtrade',
        
        // Additional Meta
        keywords: seoKeywords.value,
        author: 'ABLX Trade',
        
        // Robots
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        
        // Article Specific
        articlePublishedTime: post.value?.publishedAt || post.value?.createdAt,
        articleModifiedTime: post.value?.updatedAt || post.value?.publishedAt || post.value?.createdAt,
        articleAuthor: 'ABLX Trade',
        articleSection: post.value?.category || 'Fintech',
        articleTag: post.value?.tags || ['fintech', 'cryptocurrency']
      })
    })
    
    // Set additional head tags
    useHead({
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: https://ogp.me/ns#'
      },
      link: [
        {
          rel: 'canonical',
          href: currentUrl.value
        },
        {
          rel: 'amphtml',
          href: `${siteUrl}/amp/blogs/${blogId}`
        },
        {
          rel: 'author',
          href: `${siteUrl}/about`
        },
        {
          rel: 'publisher',
          href: siteUrl
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: currentUrl.value
        }
      ],
      meta: [
        {
          name: 'googlebot',
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        },
        {
          name: 'bingbot',
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        },
        {
          name: 'thumbnail',
          content: seoImage.value
        },
        {
          property: 'article:author',
          content: 'ABLX Trade'
        },
        {
          property: 'article:publisher',
          content: siteUrl
        }
      ]
    })
    
    // Add structured data script
    watch(structuredData, (data) => {
      if (!data) return
      
      useHead({
        script: [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(data)
          },
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(breadcrumbData.value)
          }
        ]
      })
    })
    
    // Methods
    const fetchBlogPost = async () => {
      loading.value = true
      error.value = false
    
      try {
        console.log('📡 Fetching single post with ID:', blogId)
    
        // Fetch single post from MongoDB API
        const response = await fetch(`/api/blog/${blogId}`)
    
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Post not found')
          } else if (response.status === 400) {
            throw new Error('Invalid post ID')
          } else {
            throw new Error(`Server error: ${response.status}`)
          }
        }
    
        const data = await response.json()
    
        if (data.success) {
          post.value = data.post
    
          // Get related posts from API response
          relatedPosts.value = data.relatedPosts || []
    
          // Fetch more articles for the bottom section
          await fetchMoreArticles()
    
          // Generate table of contents after content is rendered
          await nextTick()
          generateTableOfContents()
    
          console.log('✅ Post loaded successfully')
        } else {
          console.error('API returned unsuccessful response')
          error.value = true
        }
      } catch (err) {
        console.error('Error fetching blog post:', err)
        
        // Set proper error state for SEO
        useSeoMeta({
          title: 'Article Not Found | ABLX Blog',
          description: 'The requested blog article could not be found. Explore other fintech articles on ABLX Blog.',
          robots: 'noindex, follow'
        })
        
        error.value = true
      } finally {
        loading.value = false
      }
    }
    
    const fetchMoreArticles = async () => {
      try {
        // Fetch recent published posts (excluding current post)
        const response = await fetch('/api/blog/posts?status=published&limit=3')
    
        if (response.ok) {
          const data = await response.json()
    
          if (data.success) {
            // Filter out the current post and get top 3
            moreArticles.value = data.posts
              .filter(p => p.id !== blogId)
              .slice(0, 3)
          }
        }
      } catch (err) {
        console.error('Error fetching more articles:', err)
        moreArticles.value = []
      }
    }
    
    const generateTableOfContents = () => {
      if (!contentElement.value) return
    
      const headings = contentElement.value.querySelectorAll('h1, h2, h3')
      const toc = []
    
      headings.forEach((heading, index) => {
        // Generate semantic ID
        const text = heading.textContent || heading.innerText
        const id = text.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-')
        
        heading.id = id || `section-${index}`
        
        // Add aria-label for accessibility
        heading.setAttribute('aria-label', text)
        
        toc.push({
          id: heading.id,
          text: text,
          level: parseInt(heading.tagName.charAt(1))
        })
      })
    
      tableOfContents.value = toc
    }
    
    const subscribeNewsletter = async () => {
      if (!email.value || !validateEmail(email.value)) return
      
      isSubscribing.value = true
      try {
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.value })
        })
        
        if (response.ok) {
          alert(`Thank you for subscribing with ${email.value}! You'll receive our latest insights.`)
          email.value = ''
        }
      } catch (err) {
        console.error('Subscription error:', err)
      } finally {
        isSubscribing.value = false
      }
    }
    
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
    
    const toggleBookmark = () => {
      isBookmarked.value = !isBookmarked.value
      // Save to localStorage
      if (typeof window !== 'undefined') {
        const bookmarks = JSON.parse(localStorage.getItem('ablx_blog_bookmarks') || '[]')
        if (isBookmarked.value) {
          bookmarks.push(blogId)
        } else {
          const index = bookmarks.indexOf(blogId)
          if (index > -1) bookmarks.splice(index, 1)
        }
        localStorage.setItem('ablx_blog_bookmarks', JSON.stringify(bookmarks))
      }
    }
    
    const shareOnTwitter = () => {
      const text = `Check out "${post.value.title}" on ABLX Trade Blog`
      const url = currentUrl.value
      const via = 'ablxtrade'
      const hashtags = post.value?.tags?.slice(0, 2).join(',') || 'fintech,crypto'
      
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&via=${via}&hashtags=${hashtags}`,
        '_blank',
        'noopener,noreferrer'
      )
    }
    
    const shareOnLinkedIn = () => {
      const url = currentUrl.value
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        '_blank',
        'noopener,noreferrer'
      )
    }
    
    const shareOnFacebook = () => {
      const url = currentUrl.value
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        '_blank',
        'noopener,noreferrer'
      )
    }
    
    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(currentUrl.value)
        // Show toast notification instead of alert
        const toast = document.createElement('div')
        toast.textContent = 'Link copied to clipboard!'
        toast.style.cssText = 'position:fixed;top:20px;right:20px;background:#10B981;color:white;padding:12px;border-radius:8px;z-index:1000;'
        document.body.appendChild(toast)
        setTimeout(() => toast.remove(), 3000)
      } catch (err) {
        console.error('Failed to copy link:', err)
      }
    }
    
    const scrollToSection = (event) => {
      event.preventDefault()
      const targetId = event.target.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        // Add smooth scroll with offset for fixed headers
        const offset = 100
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        
        // Update URL hash without scrolling
        history.pushState(null, null, `#${targetId}`)
      }
    }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'UTC'
      })
    }
    
    const calculateReadTime = (content) => {
      if (!content) return '3 min read'
    
      // Remove HTML tags for accurate word count
      const text = content.replace(/<[^>]*>/g, '')
      const wordCount = text.split(/\s+/).filter(word => word.length > 0).length
      const readTime = Math.max(1, Math.ceil(wordCount / 200))
      return `${readTime} min read`
    }
    
    // Initialize reading progress
    const readingProgress = ref(0)
    onMounted(() => {
      // Fetch the blog post data
      fetchBlogPost()
      
      // Setup reading progress
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
          const scrollTop = window.pageYOffset
          const docHeight = document.body.scrollHeight - window.innerHeight
          const scrollPercent = (scrollTop / docHeight) * 100
          readingProgress.value = scrollPercent
        })
      }
      
      // Check if bookmarked
      if (typeof window !== 'undefined') {
        const bookmarks = JSON.parse(localStorage.getItem('ablx_blog_bookmarks') || '[]')
        isBookmarked.value = bookmarks.includes(blogId)
      }
    })
    
    // Cleanup
    onBeforeUnmount(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', () => {})
      }
    })
    </script>


<style scoped>
/* All CSS remains exactly the same - no changes */
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

/* Article content styling */
.prose {
    color: #374151;
}

.prose h2 {
    color: #1f2937;
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3;
}

.prose p {
    margin-bottom: 1.5em;
    line-height: 1.7;
    font-size: 1.125rem;
}

.prose ul {
    margin-bottom: 1.5em;
}

.prose li {
    margin-bottom: 0.5em;
    line-height: 1.6;
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

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}

/* Focus styles for accessibility */
button:focus,
a:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Print styles */
@media print {
    .no-print {
        display: none !important;
    }

    .prose {
        font-size: 12pt;
        line-height: 1.6;
    }

    .gradient-text {
        background: none;
        -webkit-text-fill-color: #1f2937;
        color: #1f2937;
    }
}

/* Blog content styling */
.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4),
.blog-content :deep(h5),
.blog-content :deep(h6) {
    color: #1f2937;
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3;
    scroll-margin-top: 100px;
    /* Add scroll margin for better scrolling experience */
}

.blog-content :deep(h1) {
    font-size: 2.25em;
}

.blog-content :deep(h2) {
    font-size: 1.875em;
}

.blog-content :deep(h3) {
    font-size: 1.5em;
}

.blog-content :deep(h4) {
    font-size: 1.25em;
}

.blog-content :deep(p) {
    margin-bottom: 1.5em;
    line-height: 1.7;
    font-size: 1.125rem;
    color: #374151;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
    margin-bottom: 1.5em;
    padding-left: 1.5em;
}

.blog-content :deep(li) {
    margin-bottom: 0.5em;
    line-height: 1.6;
}

.blog-content :deep(img) {
    border-radius: 1rem;
    margin: 2em 0;
    max-width: 100%;
    height: auto;
}

.blog-content :deep(a) {
    color: #2563eb;
    text-decoration: underline;
}

.blog-content :deep(a:hover) {
    color: #1d4ed8;
}

.blog-content :deep(em) {
    font-style: italic;
    color: #6b7280;
}

.blog-content :deep(strong) {
    font-weight: 700;
    color: #1f2937;
}
</style>