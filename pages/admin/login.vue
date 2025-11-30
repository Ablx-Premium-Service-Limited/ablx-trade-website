<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <!-- Header -->
            <div class="text-center fade-in">
                <div
                    class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200 shadow-sm">
                    <i class="fas fa-lock mr-2 text-blue-600 text-base"></i>
                    <span class="text-sm font-medium text-blue-600">Admin Access</span>
                </div>

                <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Admin <span class="gradient-text">Portal</span>
                </h1>

                <p class="text-gray-600 mb-8">
                    Secure access to the ABLX administration dashboard
                </p>
            </div>

            <!-- Login Form -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 card-hover fade-in"
                style="animation-delay: 0.1s;">
                <form @submit.prevent="handleLogin" class="space-y-6">
                    <!-- Email Field -->
                    <div class="form-group">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-envelope mr-2 text-blue-500"></i>
                            Email Address
                        </label>
                        <input type="email" id="email" v-model="loginForm.email" required
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="admin@ablxtrade.com" :class="{ 'border-red-300': errors.email }">
                        <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                    </div>

                    <!-- Password Field -->
                    <div class="form-group">
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-key mr-2 text-blue-500"></i>
                            Password
                        </label>
                        <div class="relative">
                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="loginForm.password"
                                required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 pr-12"
                                placeholder="Enter your password" :class="{ 'border-red-300': errors.password }">
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors">
                                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                            </button>
                        </div>
                        <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" v-model="loginForm.remember"
                                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                            <label for="remember" class="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>

                        <a href="#" class="text-sm text-blue-600 hover:text-blue-500 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <!-- General Error -->
                    <div v-if="errors.general" class="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p class="text-sm text-red-600">{{ errors.general }}</p>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" :disabled="isLoading"
                        class="w-full gradient-bg text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                        <span v-if="!isLoading" class="flex items-center justify-center">
                            <i class="fas fa-sign-in-alt mr-3"></i>
                            Sign In to Dashboard
                        </span>
                        <span v-else class="flex items-center justify-center">
                            <i class="fas fa-spinner fa-spin mr-3"></i>
                            Signing In...
                        </span>
                    </button>
                </form>

                <!-- Security Notice -->
                <div class="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div class="flex items-start">
                        <i class="fas fa-shield-alt text-blue-500 mt-1 mr-3"></i>
                        <div>
                            <h4 class="text-sm font-semibold text-blue-800 mb-1">Security Notice</h4>
                            <p class="text-xs text-blue-600">
                                This portal is for authorized personnel only. All activities are monitored and logged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Support Contact -->
            <div class="text-center fade-in" style="animation-delay: 0.2s;">
                <p class="text-sm text-gray-600">
                    Need help? Contact
                    <a href="mailto:admin-support@ablxtrade.com"
                        class="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                        admin-support@ablxtrade.com
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// SEO Meta Data
useHead({
    title: 'Admin Login | ABLX Fintech - Secure Administration Portal',
    meta: [
        {
            name: 'description',
            content: 'Secure admin login portal for ABLX Fintech management dashboard and administrative functions.'
        },
        {
            name: 'robots',
            content: 'noindex, nofollow'
        }
    ]
})

const router = useRouter()

// Login form state
const loginForm = ref({
    email: '',
    password: '',
    remember: false
})

const showPassword = ref(false)
const isLoading = ref(false)
const errors = ref({})

const handleLogin = async () => {
    // Reset errors
    errors.value = {}

    // Basic validation
    if (!loginForm.value.email) {
        errors.value.email = 'Email is required'
    }

    if (!loginForm.value.password) {
        errors.value.password = 'Password is required'
    }

    if (Object.keys(errors.value).length > 0) {
        return
    }

    isLoading.value = true

    try {
        // Call login API
        const { success, user, error } = await $fetch('/api/admin/login', {
            method: 'POST',
            body: loginForm.value
        })

        if (success) {
            // Redirect to admin dashboard
            await router.push('/admin/dashboard')
        } else {
            errors.value.general = error || 'Login failed. Please try again.'
        }
    } catch (error) {
        errors.value.general = error.data?.statusMessage || 'Login failed. Please try again.'
        console.error('Login error:', error)
    } finally {
        isLoading.value = false
    }
}

// Check if already logged in
onMounted(async () => {
    try {
        // Check if user is already authenticated
        const { authenticated } = await $fetch('/api/admin/me')
        if (authenticated) {
            await router.push('/admin/dashboard')
            return
        }
    } catch (error) {
        // Not authenticated, continue with login page
        console.log('User not authenticated, showing login page')
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
/* Your existing styles remain the same */
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
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Form focus effects */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.2);
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