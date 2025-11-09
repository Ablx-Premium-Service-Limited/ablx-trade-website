import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/blogs/**': { 
      ssr: true,
      cors: true
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
