import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tsconfigPaths from 'vite-tsconfig-paths'

const projectDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Stable resolution for Nitro/Vite hoisted bundles (relative ../ chains from
  // server/api/* break when inlined into .nuxt/dev/index.mjs on Windows).
  alias: {
    '#blog-slug': resolve(projectDir, 'utils/blogSlug.js'),
  },
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
    mongodbUri: process.env.MONGODB_URI,
    mongodbDb: process.env.MONGODB_DB || 'blogs',

    public: {
      siteUrl: 'https://ablxtrade.com',
      blogSubdomain: 'blogs.ablxtrade.com'
    }
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
})
