<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <!-- Navigation -->
        <Navigation />

        <!-- Blog Header -->
        <section class="md:pt-24 pt-10 pb-6 bg-white">
            <div class="container mx-auto px-4 sm:px-6">
                <div class="max-w-7xl mx-auto">
                    <!-- Breadcrumb -->
                    <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 fade-in">
                        <NuxtLink to="/" class="hover:text-blue-600 transition-colors">Home</NuxtLink>
                        <i class="fas fa-chevron-right text-xs"></i>
                        <NuxtLink to="/blogs" class="hover:text-blue-600 transition-colors">Blog</NuxtLink>
                        <i class="fas fa-chevron-right text-xs"></i>
                        <span class="text-gray-800 font-medium">{{ post.category }}</span>
                    </nav>

                    <!-- Article Header -->
                    <article class="fade-in">
                        <div class="flex items-center mb-6">
                            <span
                                class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                                {{ post.category }}
                            </span>
                            <span class="text-gray-500 text-sm ml-4">{{ formatDate(post.date) }}</span>
                            <div class="flex items-center text-gray-500 text-sm ml-4">
                                <i class="fas fa-eye mr-1"></i>
                                <span>{{ post.views }}</span>
                            </div>
                        </div>

                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                            {{ post.title }}
                        </h1>

                        <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            {{ post.excerpt }}
                        </p>

                        <!-- Author Info -->
                        <div class="flex items-center mb-8 p-6 bg-gray-50 rounded-2xl">
                            <img :src="post.author.avatar" :alt="post.author.name" class="w-16 h-16 rounded-full mr-4">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-800">{{ post.author.name }}</h3>
                                <p class="text-gray-600 text-sm mb-2">{{ post.author.role }}</p>
                                <p class="text-gray-500 text-sm">{{ post.author.bio }}</p>
                            </div>
                            <div class="flex space-x-3">
                                <button @click="shareOnTwitter"
                                    class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                    <i class="fab fa-twitter"></i>
                                </button>
                                <button @click="shareOnLinkedIn"
                                    class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                    <i class="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Featured Image -->
        <section class="py-8 bg-white">
            <div class="container mx-auto px-4 sm:px-6">
                <div class="max-w-4xl mx-auto fade-in">
                    <div class="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                        <img :src="post.featuredImage" :alt="post.title" class="w-full h-full object-cover">
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
                            <article class="prose prose-lg max-w-none fade-in">
                                <!-- Introduction -->
                                <div id="introduction" class="mb-12">
                                    <p class="text-xl text-gray-700 leading-relaxed mb-6">
                                        The African cryptocurrency market is experiencing unprecedented growth, with
                                        adoption rates soaring across the continent. This comprehensive analysis
                                        explores the key trends, challenges, and opportunities shaping the future of
                                        digital assets in Africa.
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
                                            <span class="text-gray-700">Africa leads global crypto adoption with 1200%
                                                growth in peer-to-peer transactions</span>
                                        </li>
                                        <li class="flex items-start">
                                            <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-lg"></i>
                                            <span class="text-gray-700">Nigeria and Kenya dominate African crypto
                                                markets with 35% combined market share</span>
                                        </li>
                                        <li class="flex items-start">
                                            <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-lg"></i>
                                            <span class="text-gray-700">Mobile-based crypto solutions driving financial
                                                inclusion in rural areas</span>
                                        </li>
                                        <li class="flex items-start">
                                            <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-lg"></i>
                                            <span class="text-gray-700">Regulatory frameworks evolving to support
                                                innovation while protecting investors</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Market Analysis -->
                                <div id="market" class="mb-12">
                                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Current Market Landscape</h2>
                                    <p class="text-gray-700 mb-6 leading-relaxed">
                                        The African cryptocurrency market has evolved from niche interest to mainstream
                                        financial tool. With over $100 billion in crypto transactions in 2023, the
                                        continent is establishing itself as a crucial player in the global digital
                                        economy.
                                    </p>

                                    <div class="bg-gray-50 rounded-2xl p-6 mb-6">
                                        <h3 class="text-xl font-bold text-gray-800 mb-4">Market Growth Statistics</h3>
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div class="text-center p-4 bg-white rounded-xl">
                                                <div class="text-3xl font-bold gradient-text mb-2">1200%</div>
                                                <div class="text-gray-600 text-sm">P2P Transaction Growth (2020-2023)
                                                </div>
                                            </div>
                                            <div class="text-center p-4 bg-white rounded-xl">
                                                <div class="text-3xl font-bold gradient-text mb-2">$105B</div>
                                                <div class="text-gray-600 text-sm">Total Crypto Volume (2023)</div>
                                            </div>
                                            <div class="text-center p-4 bg-white rounded-xl">
                                                <div class="text-3xl font-bold gradient-text mb-2">32%</div>
                                                <div class="text-gray-600 text-sm">Year-over-Year User Growth</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Country Analysis -->
                                <div id="countries" class="mb-12">
                                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Country-Specific Analysis</h2>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div class="bg-green-50 rounded-2xl p-6">
                                            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <i class="fas fa-flag mr-3 text-green-500"></i>
                                                Nigeria
                                            </h3>
                                            <ul class="space-y-2 text-gray-700">
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    Largest crypto market in Africa
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    $56 billion in crypto transactions
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    Youth-driven adoption (18-35 age group)
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="bg-purple-50 rounded-2xl p-6">
                                            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <i class="fas fa-flag mr-3 text-purple-500"></i>
                                                Kenya
                                            </h3>
                                            <ul class="space-y-2 text-gray-700">
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    Fastest growing crypto economy
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    Strong mobile money integration
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                                    Progressive regulatory approach
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- Investment Opportunities -->
                                <div id="opportunities" class="mb-12">
                                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Investment Opportunities in 2024
                                    </h2>

                                    <div
                                        class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-6">
                                        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                            <h3 class="text-2xl font-bold mb-4 text-yellow-300">Emerging Trends</h3>
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div class="flex items-start">
                                                    <i class="fas fa-rocket text-yellow-300 mr-4 text-xl mt-1"></i>
                                                    <div>
                                                        <h4 class="font-bold text-lg mb-1">DeFi Expansion</h4>
                                                        <p class="text-blue-100">Decentralized finance platforms gaining
                                                            traction</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <i class="fas fa-mobile-alt text-yellow-300 mr-4 text-xl mt-1"></i>
                                                    <div>
                                                        <h4 class="font-bold text-lg mb-1">Mobile-First Solutions</h4>
                                                        <p class="text-blue-100">Crypto wallets integrated with mobile
                                                            money</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <i class="fas fa-shield-alt text-yellow-300 mr-4 text-xl mt-1"></i>
                                                    <div>
                                                        <h4 class="font-bold text-lg mb-1">Regulatory Clarity</h4>
                                                        <p class="text-blue-100">Clearer frameworks boosting investor
                                                            confidence</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <i
                                                        class="fas fa-exchange-alt text-yellow-300 mr-4 text-xl mt-1"></i>
                                                    <div>
                                                        <h4 class="font-bold text-lg mb-1">Cross-Border Trade</h4>
                                                        <p class="text-blue-100">Crypto facilitating international
                                                            commerce</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Conclusion -->
                                <div id="conclusion" class="mb-12">
                                    <h2 class="text-3xl font-bold text-gray-800 mb-6">Conclusion</h2>
                                    <p class="text-gray-700 mb-6 leading-relaxed">
                                        The African cryptocurrency market stands at a pivotal moment in its evolution.
                                        With unprecedented growth rates, innovative mobile solutions, and evolving
                                        regulatory frameworks, the continent is poised to become a global leader in
                                        digital asset adoption.
                                    </p>
                                    <p class="text-gray-700 leading-relaxed">
                                        For investors and entrepreneurs, understanding these dynamics is crucial for
                                        capitalizing on the opportunities that lie ahead in Africa's digital financial
                                        revolution.
                                    </p>
                                </div>

                                <!-- Call to Action -->
                                <div
                                    class="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Start Your Crypto Journey Today
                                    </h3>
                                    <p class="text-gray-700 mb-6">
                                        Ready to explore cryptocurrency opportunities in Africa? ABLX provides secure,
                                        user-friendly platforms for trading and managing your digital assets.
                                    </p>
                                    <div class="flex flex-col w-full sm:justify-center sm:flex-row gap-4" ref="buttons">
                                        <button
                                            class="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105">
                                            <i class="fab fa-apple mr-3 text-xl"></i>
                                            <div class="text-left">
                                                <div class="text-xs opacity-70">Download on</div>
                                                <div>App Store</div>
                                            </div>
                                        </button>

                                        <button
                                            class="group px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-105">
                                            <i class="fab fa-google-play mr-3 text-xl"></i>
                                            <div class="text-left">
                                                <div class="text-xs opacity-70">Get it on</div>
                                                <div>Google Play</div>
                                            </div>
                                        </button>

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
                                <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                        <i class="fas fa-list-ol mr-3 text-blue-500"></i>
                                        Contents
                                    </h3>
                                    <nav class="space-y-2">
                                        <a href="#introduction"
                                            class="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                            @click="scrollToSection">
                                            Introduction
                                        </a>
                                        <a href="#market"
                                            class="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                            @click="scrollToSection">
                                            Market Landscape
                                        </a>
                                        <a href="#countries"
                                            class="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                            @click="scrollToSection">
                                            Country Analysis
                                        </a>
                                        <a href="#opportunities"
                                            class="block text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                            @click="scrollToSection">
                                            Investment Opportunities
                                        </a>
                                        <a href="#conclusion"
                                            class="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                                            @click="scrollToSection">
                                            Conclusion
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
                                            <img :src="related.image" :alt="related.title"
                                                class="w-16 h-16 rounded-lg object-cover mr-4 flex-shrink-0">
                                            <div>
                                                <h4
                                                    class="font-semibold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                                    <NuxtLink :to="`/blogs/${related.slug}`">{{ related.title }}
                                                    </NuxtLink>
                                                </h4>
                                                <div class="flex items-center text-gray-500 text-xs">
                                                    <span>{{ formatDate(related.date) }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Newsletter -->
                                <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                                    <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <h3 class="text-xl font-bold mb-3 text-yellow-300">Stay Updated</h3>
                                        <p class="text-blue-100 mb-4 text-sm">
                                            Get the latest crypto insights and market analysis delivered to your inbox.
                                        </p>
                                        <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                                            <input v-model="email" type="email" placeholder="Enter your email" required
                                                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:bg-white/30 focus:border-white/50 transition-all duration-300">
                                            <button type="submit" :disabled="isSubscribing"
                                                class="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                                                <span v-if="!isSubscribing">Subscribe Now</span>
                                                <span v-else class="flex items-center justify-center">
                                                    <i class="fas fa-spinner fa-spin mr-2"></i>
                                                    Subscribing...
                                                </span>
                                            </button>
                                        </form>
                                        <p class="text-blue-100 text-xs mt-3 text-center">
                                            No spam. Unsubscribe anytime.
                                        </p>
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
                    <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 fade-in">
                        <div class="flex items-start">
                            <img :src="post.author.avatar" :alt="post.author.name" class="w-20 h-20 rounded-full mr-6">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-800 mb-2">About the Author</h3>
                                <h4 class="text-lg font-semibold text-blue-600 mb-2">{{ post.author.name }}</h4>
                                <p class="text-gray-600 mb-4">{{ post.author.bio }}</p>
                                <div class="flex items-center space-x-4">
                                    <span class="text-gray-500 text-sm">Follow:</span>
                                    <div class="flex space-x-3">
                                        <button class="text-gray-400 hover:text-blue-600 transition-colors">
                                            <i class="fab fa-twitter"></i>
                                        </button>
                                        <button class="text-gray-400 hover:text-blue-600 transition-colors">
                                            <i class="fab fa-linkedin-in"></i>
                                        </button>
                                        <button class="text-gray-400 hover:text-blue-600 transition-colors">
                                            <i class="fab fa-medium"></i>
                                        </button>
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
                            Explore more insights about cryptocurrency, blockchain, and financial technology in Africa.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article v-for="article in moreArticles" :key="article.id"
                            class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100 fade-in">
                            <div class="relative h-48 overflow-hidden">
                                <img :src="article.image" :alt="article.title"
                                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                                <div class="absolute top-4 left-4">
                                    <span
                                        class="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                                        {{ article.category }}
                                    </span>
                                </div>
                            </div>

                            <div class="p-6">
                                <h3
                                    class="text-xl font-bold mb-3 text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-300">
                                    <NuxtLink :to="`/blogs/${article.slug}`">{{ article.title }}</NuxtLink>
                                </h3>

                                <p class="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                                    {{ article.excerpt }}
                                </p>

                                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div class="flex items-center">
                                        <img :src="article.author.avatar" :alt="article.author.name"
                                            class="w-8 h-8 rounded-full mr-3">
                                        <span class="text-sm font-medium text-gray-700">{{ article.author.name }}</span>
                                    </div>
                                    <NuxtLink :to="`/blogs/${article.slug}`"
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

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
// Get the route parameter
const route = useRoute()
const slug = route.params.slug

// SEO Configuration
useSeoMeta({
    title: 'The Future of Cryptocurrency in African Markets: 2024 Outlook | ABLX Blog',
    description: 'Explore how cryptocurrency adoption is transforming financial landscapes across Africa. Learn about emerging trends, regulatory developments, and investment opportunities.',
    ogTitle: 'The Future of Cryptocurrency in African Markets: 2024 Outlook',
    ogDescription: 'Comprehensive analysis of cryptocurrency trends, opportunities, and challenges in African markets for 2024.',
    ogImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=630&fit=crop&auto=format',
    twitterCard: 'summary_large_image'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: `https://ablxtrade.com/blogs/${slug}`
        }
    ]
})

// Reactive data
const email = ref('')
const isSubscribing = ref(false)
const isBookmarked = ref(false)

// Sample blog post data
const post = {
    id: 1,
    title: 'The Future of Cryptocurrency in African Markets: 2024 Outlook',
    excerpt: 'Explore how cryptocurrency adoption is transforming financial landscapes across Africa. Learn about emerging trends, regulatory developments, and investment opportunities in the fastest-growing crypto market.',
    category: 'Crypto Trends',
    date: '2023-12-15',
    readTime: '8 min read',
    views: '4.2K',
    slug: 'future-cryptocurrency-africa-2024',
    featuredImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop&auto=format',
    author: {
        name: 'David Adebayo',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
        role: 'Fintech Analyst & Crypto Expert',
        bio: 'David is a leading fintech analyst with over 10 years of experience in African financial markets. He specializes in cryptocurrency trends and blockchain technology adoption across the continent.'
    }
}

// Related posts
const relatedPosts = ref([
    {
        id: 2,
        title: 'How Blockchain is Revolutionizing Cross-Border Payments',
        date: '2023-12-10',
        slug: 'blockchain-cross-border-payments',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=150&h=150&fit=crop&auto=format'
    },
    {
        id: 3,
        title: 'Understanding Crypto Regulations in Nigeria and Kenya',
        date: '2023-12-03',
        slug: 'crypto-regulations-nigeria-kenya',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=150&h=150&fit=crop&auto=format'
    },
    {
        id: 4,
        title: 'Secure Your Crypto Assets: Best Practices Guide',
        date: '2023-11-25',
        slug: 'crypto-security-best-practices',
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=150&h=150&fit=crop&auto=format'
    }
])

// More articles
const moreArticles = ref([
    {
        id: 5,
        title: 'Top 5 Cryptocurrencies to Watch in African Markets',
        excerpt: 'Explore the most promising digital assets gaining traction across African markets and their potential impact on local economies.',
        category: 'Crypto Trends',
        date: '2023-12-08',
        slug: 'top-cryptocurrencies-africa-2024',
        image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=400&h=250&fit=crop&auto=format',
        author: {
            name: 'Michael Chen',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format'
        }
    },
    {
        id: 6,
        title: 'Financial Inclusion: Digital Banking in Rural Africa',
        excerpt: 'Learn about innovative digital banking solutions that are bringing financial services to underserved communities across Africa.',
        category: 'Digital Banking',
        date: '2023-12-05',
        slug: 'financial-inclusion-digital-banking',
        image: 'https://images.unsplash.com/photo-1563017940-49c08f792f13?w=400&h=250&fit=crop&auto=format',
        author: {
            name: 'Amina Diallo',
            avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face&auto=format'
        }
    },
    {
        id: 7,
        title: 'The Rise of DeFi in Africa: Opportunities and Challenges',
        excerpt: 'Explore how decentralized finance is creating new financial opportunities while facing unique challenges in African contexts.',
        category: 'DeFi',
        date: '2023-11-28',
        slug: 'defi-africa-opportunities-challenges',
        image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=250&fit=crop&auto=format',
        author: {
            name: 'Rachel Kim',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format'
        }
    }
])

// Methods
const subscribeNewsletter = async () => {
    if (email.value) {
        isSubscribing.value = true
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        alert(`Thank you for subscribing with ${email.value}! You'll receive our latest insights.`)
        email.value = ''
        isSubscribing.value = false
    }
}

const toggleBookmark = () => {
    isBookmarked.value = !isBookmarked.value
    // You could save to localStorage or send to API
    if (isBookmarked.value) {
        // Save bookmark logic
    }
}

const shareOnTwitter = () => {
    const text = `Check out this article: ${post.title}`
    const url = window.location.href
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
}

const shareOnLinkedIn = () => {
    const url = window.location.href
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
}

const shareOnFacebook = () => {
    const url = window.location.href
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
}

const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
    } catch (err) {
        console.error('Failed to copy link:', err)
    }
}

const scrollToSection = (event) => {
    event.preventDefault()
    const targetId = event.target.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
    }
}

const startTrading = () => {
    // Navigate to trading page or show modal
    console.log('Start trading clicked')
}

const learnMore = () => {
    // Navigate to learn more page
    console.log('Learn more clicked')
}

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
}

onMounted(() => {
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
</style>