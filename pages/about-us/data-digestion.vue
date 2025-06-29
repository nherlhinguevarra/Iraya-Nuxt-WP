<template>
    <div class="relative w-screen max-w-full">
    <!-- Fixed background image -->
        <div class="absolute inset-0 bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BACKGROUND.webp')] 
        dark:bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BG-DARK.png')] 
        bg-cover bg-top bg-no-repeat bg-fixed z-0"></div>

        <div class="relative z-10 flex flex-col lg:flex-row w-full h-full px-14 lg:px-4 py-10">
            <!-- SIDE MENU -->
            <div class="w-full mt-32 ml-32 lg:w-1/4 mb-10 hidden lg:block">
                <h1 class="text-[#F47625] text-2xl mb-8 font-semibold">WHY IRAYA?</h1>
                <ul>
                    <li><NuxtLink to="/about-us/value-proposition" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Value Proposition</NuxtLink></li>
                    <li><NuxtLink to="/about-us/data-ingestion" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Data Ingestion</NuxtLink></li>
                    <li><NuxtLink to="/about-us/data-digestion" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Data Digestion</NuxtLink></li>
                    <li><NuxtLink to="/about-us/knowledge-extraction" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Knowledge Extraction</NuxtLink></li>
                </ul>
            </div>

            <!-- MAIN CONTENT -->
            <div class="w-full mt-12 mb-12 lg:w-3/4">
                <h1 class="text-[#535353] text-4xl lg:text-5xl leading-tight mb-10 pr-0 lg:pr-40">
                    <span class="text-[#F47625] font-bold">How</span> your      
                    <span class="text-[#2D918C] font-bold">unstructured data</span> 
                    is <span class="font-bold">processed?</span>
                </h1>
                <h2 class="text-[#F47625] text-2xl lg:text-3xl font-bold mb-5">DATA DIGESTION</h2>
                <p class="text-[#666666] text-base mb-5 pr-0 lg:pr-44">
                   The ingested documents are available as information for review.
                   <br><br>
                   There are four ways to review the information in the ElasticDocs Intuitive Knowledge Container: 
                </p>
                <ul class="text-[#666666] text-base font-normal list-disc ml-10 mb-6 pr-0 lg:pr-44">
                    <li>Automated geolocation of documents to visualize density of information within an area</li>
                    <li>Metadata extraction of relevant information such as well names, locations, basins, data vintage etc.</li>
                    <li>Image extraction of similar geological images classes for efficient identification of play analogues</li>
                    <li>Efficient inter- and intra-search of the global text corpus for quantitative textual analysis of 
                    document contents to create automated and standardized geological & hydrocarbon content 
                    summary</li>
                </ul>
                <p class="text-[#666666] text-base font-normal mb-6 pr-0 lg:pr-44">
                    It is possible to search the full range of information from grain size including mineral classification on 
                    images, core images and well log data through to field data and basin data.
                </p>
                <div class="relative inline-block mr-0 lg:mr-44">
                    <!-- Background rectangle with shadow -->
                    <div class="absolute inset-0 bg-white dark:bg-neutral-900 shadow-2xl rounded-lg" aria-hidden="true"></div>
                    <!-- Transparent image on top -->
                    <img
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/DataDigestion.webp"
                        alt="Data Digestion"
                        class="relative z-10 w-full h-auto object-contain p-10 block dark:hidden"
                    />
                    <!-- Dark Mode -->
                    <img 
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/DataDigestion-Dark.png"
                        alt="Data Digestion"
                        class="relative z-10 w-full h-auto object-contain p-10 hidden dark:block"
                    />
                </div>
            </div>
        </div>
    </div>
</template>