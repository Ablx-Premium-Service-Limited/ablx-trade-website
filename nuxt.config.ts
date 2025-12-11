import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/sitemap'
  ],
  css: ['@/assets/css/index.css'],
  plugins: [
    '~/plugins/zoho-chat.client.js'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'https://ablxtrade.com',   // IMPORTANT
    name: 'AblxTrade',
    description: 'AblxTrade – Your Gateway to Seamless Trading',
    defaultLocale: 'en'
  },

  sitemap: {
    strictNuxtContentPaths: true,
    cacheMaxAgeSeconds: 3600,
    sources: [],
  },
  routeRules: {
    '/blogs/**': { 
      ssr: true,
      cors: true
    },
    '/admin/**': { 
      ssr: false,
      prerender: false 
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://ablxtrade.com',
      blogSubdomain: 'blogs.ablxtrade.com'
    }
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
})
