<template>
    <div class="relative w-screen h-screen max-w-full">
    <!-- Fixed background image -->
        <div class="absolute inset-0 bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BACKGROUND.webp')]
        dark:bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BG-DARK.png')] bg-cover bg-top bg-no-repeat bg-fixed z-0"></div>

        <div class="relative z-10 flex flex-col lg:flex-row w-full h-full px-14 lg:px-4 py-10">
            <div class="w-full mt-32 ml-32 lg:w-1/4 mb-10 hidden lg:block">
                <h1 class="text-[#F47625] text-2xl mb-8 font-semibold">SERVICES</h1>
                <ul>
                    <li><NuxtLink to="/services/data-factory" class="text-[#535353] text-base font-medium mb-1 hover:text-black dark:hover:text-white"
                    >Data Factory</NuxtLink></li>
                    <li><NuxtLink to="/services/knowledge-workflows" class="text-[#535353] text-base font-medium mb-1 hover:text-black dark:hover:text-white"
                    >Knowledge Workflows</NuxtLink></li>
                </ul>
            </div>
            
            <div class="w-full mt-12 mb-12 lg:w-3/4">
                <h1 class="text-[#535353] dark:text-white text-4xl lg:text-5xl leading-tight mb-10 pr-0 lg:pr-40">
                    <span class="text-[#666666] dark:text-white">We customize</span>
                    <span class="text-[#F47625] font-bold"> machine learning</span> 
                    experiments to solve <span class="text-[#2D918C] font-bold">engineering</span> 
                    and <span class="text-[#2D918C] font-bold">geoscience</span>
                    <span class="font-bold"> problems</span>
                </h1>

                <h2 class="text-[#F47625] text-2xl lg:text-3xl font-bold mb-5">KNOWLEDGE WORKFLOWS</h2>
                <p class="text-[#666666] dark:text-[#C8CCD2] text-base font-normal pr-0 lg:pr-44">
                    Iraya Energies develops Application Programming Interfaces (APIs) to capture new knowledge and 
                    insights from the digitized documents in our Machine Learning laboratory.
                    <br><br>
                    Our team of software developers, experienced engineers, and geoscientists can support the full 
                    software development process from user interface and experience design to building databases, 
                    machine learning code integration, and API development.
                </p>
            </div>
        </div>
    </div>
</template>
