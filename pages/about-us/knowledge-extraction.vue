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
                    <span class="text-[#666666]">Realize the </span>
                    <span class="text-[#F47625] font-bold">potential</span> 
                    of your <span class="text-[#2D918C] font-bold">unstructured data</span> 
                    with <span class="font-bold">KNOWLEDGE EXTRACTION</span>
                </h1>
                <p class="text-[#666666] text-base font-normal mb-2 pr-0 lg:pr-44">
                    The data digestion provides easy access to information in a fast and efficient fashion; it is orders of 
                    magnitude faster than current manual approaches.
                    <br><br>
                    The digitization process makes it possible obtain new knowledge and in-sights that is very difficult 
                    or even impossible to achieve using unstructured data in its existing format.
                    <br><br>
                    The knowledge extraction is done through many types of higher order analysis. Examples are:
                </p>
                <ul class="text-[#666666] text-base font-normal list-disc ml-10 mb-6 pr-0 lg:pr-44">
                    <li>
                        Drilling history: A knowledge graph is used to visualize dependencies between wells and 
                        understand the drilling history in an area. The analysis is constructed by interrogating each well in the 
                        database and investigating the degree of correlation with the remaining wells
                    </li>
                    <li>
                        Rock physics modelling: As all tables in well reports are available as .csv files the parameter 
                        selection building a rock physics model can be done with higher confidence. Clay volume cut-offs, 
                        end member definitions and depth trends are more easily picked and validated. It allows for a 
                        geological constrained rock physics models that are supported by huge amount of data, as opposed 
                        to a limited block-by-block approach, where data is sparse
                    </li>
                    <li>
                        Sedimentology: Using t-Distribute Stochastic Neighbor Embedding (t-SNE), which are dimension 
                        reduction techniques suited for visualizing high-dimensional data, thin sections from several hundred 
                        well reports can be clustered without any prior knowledge with similar features regardless of their 
                        geospatial proximity. As any identified images are tagged the origin is fully traceable back to the 
                        specific page in the original report
                    </li>
                </ul>
                <div class="flex justify-center">
                    <div class="relative inline-block">
                        <img
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/KnowledgdeExtraction.webp"
                        alt=""
                        class="relative z-10 w-full lg:w-3/4 h-auto object-contain shadow-2xl rounded-lg block dark:hidden"
                        />
                        <!-- Dark Mode -->
                        <img
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/KnowledgdeExtraction-Dark.png"
                        alt=""
                        class="relative z-10 w-full lg:w-3/4 h-auto object-contain shadow-2xl rounded-lg hidden dark:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>