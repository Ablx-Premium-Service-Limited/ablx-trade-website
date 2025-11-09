<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 flex items-center justify-center text-white font-bold text-xl">
              <img src="/asset-1-1.png" alt="ABLX Logo" class="w-10 h-10"/>
            </div>
          </div>
          <p class="text-gray-400">Your all-in-one fintech solution for modern financial needs.</p>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Products</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Crypto Trading</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Cross-Border Payments</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Bill Payments</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Airtime & Data</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Company</h3>
          <ul class="space-y-2">
            <li><a href="/about" class="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/careers" class="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="https://blog.ablxtrade.com" class="text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Support</h3>
          <ul class="space-y-2">
            <!-- <li><a href="#" class="text-gray-400 hover:text-white">Help Center</a></li> -->
            <li><a href="/contact-us" class="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="/privacy-policy" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" class="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} ABLX Fintech. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>