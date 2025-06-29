<template>
    <header
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
            isScrolled ? 'bg-white dark:bg-[#202124]' : 'bg-transparent',
            isScrolledUp ? 'py-2' : 'py-1'
        ]"
        :style="isScrolled ? 'box-shadow: 1px 0px 15px -4px rgba(0, 0, 0, 0.5);' : ''"
    >

        <div class="w-full flex justify-between items-center px-4">
            <!-- Left: Logo -->
            <img
                src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/03/Iraya-Logo_Horizontal_w-Slogan-2_110521-small-1.webp"
                alt="iraya-logo"
                :class="[
                    'transition-all duration-300 ease-in-out',
                    isScrolledUp ? 'h-13' : 'h-12'
                ]"
                class="w-auto"
            />


            <!-- Right: Hamburger (Mobile) and Desktop Nav -->
            <div class="flex items-center space-x-0 lg:space-x-6">
                <!-- Hamburger (Mobile) -->
                <button @click="toggleMenu" class="md:hidden text-[#F47734] focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <!-- Shared Navigation (hidden on mobile unless toggled) -->
                <nav
                    :class="[
                        'text-[15px] font-semibold',
                        isOpen ? 'block md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6' : 'hidden md:flex md:space-x-6'
                    ]"
                    class="absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-[#202124] md:bg-transparent px-6 md:px-0 py-2 md:py-0 z-40 mt-[-2px]"
                >

                    <!-- Navigation Links -->
                    <div class="py-1">
                        <NuxtLink to="/" :class="[ $route.path === '/' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">Home</NuxtLink>
                    </div>

                    <!-- Products Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('products')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/products/data-atelier" :class="[ $route.path === '/products/data-atelier' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">Products</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>

                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.products ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="py-2 text-sm text-black-700 dark:bg-[#202124]">
                                <li><NuxtLink to="/products/data-atelier" :class="[ $route.path === '/products/data-atelier' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2] ', 'hover:bg-gray-100 dark:hover:bg-[#535353] block px-4 py-2']">Data Atelier</NuxtLink></li>
                                <li><NuxtLink to="/products/elasticdocs" :class="[ $route.path === '/products/elasticdocs' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2] ', 'hover:bg-gray-100 dark:hover:bg-[#535353] block px-4 py-2']">ElasticDocs</NuxtLink></li>
                                <li><NuxtLink to="/products/bonaparte" :class="[ $route.path === '/products/bonaparte' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2] ', 'hover:bg-gray-100 dark:hover:bg-[#535353] block px-4 py-2']">Bonaparte 400</NuxtLink></li>
                                <li><NuxtLink to="/products/ed2k" :class="[ $route.path === '/products/ed2k' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2] ', 'hover:bg-gray-100 dark:hover:bg-[#535353] block px-4 py-2']">ED2K</NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <div class="py-1">
                        <NuxtLink to="/demo" :class="[ $route.path === '/demo' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">Demo</NuxtLink>
                    </div>
                    <div class="py-1">
                        <NuxtLink to="/pricing" :class="[ $route.path === '/pricing' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">Pricing</NuxtLink>
                    </div>

                    <!-- Services Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('services')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/services/data-factory" :class="[ $route.path === '/services/data-factory' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">Services</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>
                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.services ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="py-2 text-sm text-black-700 dark:bg-[#202124]">
                                <li><NuxtLink to="/services/data-factory" :class="[ $route.path === '/services/data-factory' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Data Factory</NuxtLink></li>
                                <li><NuxtLink to="/services/knowledge-workflows" :class="[ $route.path === '/services/knowledge-workflows' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Knowledge Workflows</NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <!-- About Us Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('about')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/about-us/people" :class="[ $route.path === '/about-us/people' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">About</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>
                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.about ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="py-2 text-sm text-black-700 dark:bg-[#202124]">
                                <li><NuxtLink to="/about-us/value-proposition" :class="[ $route.path === '/about-us/value-proposition' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Value Proposition</NuxtLink></li>
                                <li><NuxtLink to="/about-us/people" :class="[ $route.path === '/about-us/people' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">People</NuxtLink></li>
                                <li><NuxtLink to="/about-us/partners" :class="[ $route.path === '/about-us/partners' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Partners</NuxtLink></li>
                                <li><NuxtLink to="/about-us/contact-us" :class="[ $route.path === '/about-us/contact-us' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Contact Us</NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Resources Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('resources')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/resources/brochure" :class="[ $route.path === '/resources/brochure' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'hover:text-[#F47734]' ]">Resources</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>
                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.resources ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="dark:bg-[#202124]">
                                <li><NuxtLink to="/resources/brochure" :class="[ $route.path === '/resources/brochure' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Brochure</NuxtLink></li>
                                <li><NuxtLink to="/resources/publication" :class="[ $route.path === '/resources/publication' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Publications</NuxtLink></li>
                                <li><NuxtLink to="/resources/blog" :class="[ $route.path === '/resources/blog' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Blogs</NuxtLink></li>
                                <li><NuxtLink to="/resources/careers" :class="[ $route.path === '/resources/careers' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Careers</NuxtLink></li>
                                <li><NuxtLink to="/resources/privacy-statement" :class="[ $route.path === '/resources/privacy-statement' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Privacy Statement</NuxtLink></li>
                                <li><NuxtLink to="/resources/cookie-policy" :class="[ $route.path === '/resources/cookie-policy' ? 'text-[#F47734]' : 'text-black dark:text-[#C8CCD2]', 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#535353]' ]">Cookie Policy</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <div class="h-12"></div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isOpen = ref(false)
    const showDropdown = ref({
    products: false,
    services: false,
    about: false,
    resources: false
    })

    const toggleMenu = () => {
    isOpen.value = !isOpen.value
    }

    const toggleDropdown = (menu) => {
    if (window.innerWidth < 768) {
        for (let key in showDropdown.value) {
        showDropdown.value[key] = (key === menu) ? !showDropdown.value[key] : false
        }
    }
    }

    // Header scroll logic
    const isScrolled = ref(false)
    const isScrolledUp = ref(true) // assume at top initially

    let lastScroll = 0

    const handleScroll = () => {
        const currentScroll = window.scrollY

        isScrolled.value = currentScroll > 0
        isScrolledUp.value = currentScroll === 0 // Only true at the top

        lastScroll = currentScroll
    }


    onMounted(() => {
    // ✅ Trigger scroll logic immediately to catch current scroll position
    handleScroll()

    // ✅ Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    })
</script>
