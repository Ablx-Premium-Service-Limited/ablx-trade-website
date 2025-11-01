<template>
  <div id="app" class="bg-gray-50 text-gray-800">
    <Navigation />
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <FAQ />
    <CTA />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'ABLX Trade - Your Gateway to Seamless Trading',
  meta: [
    { name: 'description', content: 'Experience seamless trading with ABLX Trade. Join us today and take your trading to the next level!' },
    { name: 'keywords', content: 'trading, finance, investment, ABLX Trade, online trading' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
});
</script>