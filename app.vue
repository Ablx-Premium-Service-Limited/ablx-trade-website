<template>
  <SchemaGlobal />
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>

const route = useRoute()

useHead({
  titleTemplate: (title) =>
    title ? `${title} | AblxTrade` : "AblxTrade – Your Gateway to Seamless Trading",

  link: [
    {
      rel: "canonical",
      href: "https://ablxtrade.com" + route.path
    }
  ],

  meta: [
    { name: "description", content: "Experience seamless trading with ABLX Trade. Join us today and take your trading to the next level!" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "AblxTrade" },
    { property: "og:url", content: "https://ablxtrade.com" + route.path },
    { property: "og:title", content: "AblxTrade – Your Gateway to Seamless Trading" },
    { property: "og:description", content: "Experience seamless trading with ABLX Trade. Join us today and take your trading to the next level" },
    { property: "og:image", content: "https://ablxtrade.com/favi.png" },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "AblxTrade – Your Gateway to Seamless Trading" },
    { name: "twitter:description", content: "Experience seamless trading with ABLX Trade. Join us today and take your trading to the next level" },
    { name: "twitter:image", content: "https://ablxtrade.com/favi.png" }
  ]
})
</script>
