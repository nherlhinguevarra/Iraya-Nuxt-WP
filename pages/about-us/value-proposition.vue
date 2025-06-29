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
                    <span class="text-[#666666]">We make</span>
                    <span class="text-[#F47625] font-bold"> unstructured data</span> 
                    instantly <span class="text-[#2D918C] font-bold">available</span> 
                    at your <span class="font-bold"> fingertips</span>
                </h1>
                <p class="text-[#666666] text-base font-normal mb-6 pr-0 lg:pr-44">
                    The oil and gas industry is awash with data, both unstructured and structured, which expands 
                    exponentially and are everywhere. Through the ElasticDocs, Intuitive Knowledge Container, decades 
                    of engineering, exploration, and production data become instantly available.
                    <br><br>
                    Engineering, exploration, and production data are available in an unstructured manner including final 
                    well reports, completion reports, drilling reports, seismic processing reports, and facility management 
                    documents as examples of the huge and diverse range of data, disciplines, and formats. The files are 
                    commonly in .pdf, .docx, .xlsx, pptx, .las and .segy formats. This data is ingested through a consecutive 
                    pipeline and workflow using machine learning techniques such as natural language processing and 
                    deep convolutional neural network to provide the user with a structured set of data. The ingested 
                    documents become available for data analysis making it possible to extract information and new 
                    knowledge through the ElasticDocs Intuitive Knowledge Container.
                </p>
                <h2 class="text-[#535353] text-2xl font-bold mb-2">
                    <span class="text-[#2D918C] font-bold">4V's</span> in
                    <span class="text-[#F47625] font-bold">Big Data</span>
                </h2>
                <p class="text-[#666666] text-base font-normal mb-6 pr-0 lg:pr-44S">
                    The ElasticDocsTM Intuitive Knowledge Container manages the 4V’s in big data: A substantial Volume 
                    of unstructured data are organized from a large Variety of document types. All information is available 
                    instantaneously (Velocity) and with a high degree of accuracy (Veracity).
                </p>
                <h2 class="text-[#535353] text-2xl font-bold mb-2">Why is
                    <span class="text-[#2D918C] font-bold">ElasticDocs™</span> the
                    <span class="text-[#F47625] font-bold">right solution</span> for your company?
                </h2>
                <ul class="text-[#666666] text-base font-normal list-disc ml-10 mb-6 pr-0 lg:pr-44">
                    <li>Fast browsing of documents offers geoscientists new evidence-based insights</li>
                    <li>Share digitized data across the full exploration and production value chain and have strategic 
                        information instantly available</li>
                    <li>Maximize the value of your digitized data by giving access to diverse, multi-location subsurface
                        teams</li>
                    <li>Save valuable geoscientist time in data mining and lower exploration and production project costs</li>
                    <li>Geolocate your information to add a spatial context to new insights</li>
                    <li>Discover unknown patterns in your geoscience documents</li>
                    <li>Develop an exploration strategy by having decades of exploration history at your fingertips</li>
                </ul>

                <!-- IMAGE -->
                <div v-scroll-animate class="zoom-in relative inline-block mr-0 lg:mr-44">
                    <!-- Background rectangle with shadow -->
                    <div class="absolute inset-0 bg-white dark:bg-neutral-900 shadow-2xl rounded-lg" aria-hidden="true"></div>
                    <!-- Transparent image on top -->
                    <img
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Infographic-01_270321-scaled.webp"
                        alt="Infographic Information Extraction"
                        class="relative z-10 w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
</template>