<template>
    <div class="px-4 sm:px-6 lg:px-8 xl:px-0">

        <div class="max-w-[95%] xl:max-w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-8 mt-10">
            <!-- LEFT -->
            <div class="w-full lg:w-1/2 px-4 lg:px-0">
                <h1 class="text-[20px] lg:text-[35px] xl:text-[56px] text-[#F47625] font-light">
                    Read the Earth <span class="text-[#2D918C] font-bold"> better</span>
                </h1>
                <p class="text-[12px] lg:text-[16px] xl:text-[18px] leading-snug mt-2 xl:mt-10 text-[#666666] dark:text-[#C8CCD2] font-medium">
                    The Earth is a <strong>treasure trove of data.</strong> Using 
                    <strong>AI-enabled</strong> and cloud<br> native software, Iraya gathers 
                    and transforms <strong>unstructured data</strong><br> of the subsurface 
                    of the earth and surface facilities to find and produce 
                    the <strong>best sources of energy</strong>
                </p>
                <h3 class="text-[14px] xl:text-[18px] text-[#F47625] font-normal underline py-4 lg:py-5 xl:py-10">
                    READ ABOUT OUR TECHNOLOGY >
                </h3>
            </div>
            <!-- EARTH -->
            <div class="w-full lg:w-1/2 flex justify-center">
                <Earth />
            </div>
        </div>

        <div class="flex flex-col lg:flex-row bg-[#FFFFFF] dark:bg-[#282929] mx-auto sm:mt-[-80px] lg:mt-[-100px] p-8 lg:p-10 pb-5 lg:pb-10 rounded-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] align-center w-fit z-1 relative">
            <div class="w-full lg:w-[400px] xl:w-[560px]">
                <h1 class="text-[25px] lg:text-[40px] xl:text-[55px] text-[#F47625] lg:leading-[1.2] xl:leading-[60px] font-medium pb-2 lg:pb-0">
                    Iraya, 
                    <span class="text-[#313131] dark:text-[#C8CCD2]">experts in</span>
                    <span class="text-[#2D918C]"> energy.</span>
                </h1>
                <p class="text-[12px] lg:text-[14px] xl:text-[18px] leading-snug lg:mt-5 xl:mt-10 text-[#666666] dark:text-[#C8CCD2] font-medium w-full lg:w-[90%] pb-2 lg:pb-0">
                    Proven track record in <strong>combining engineering and geoscience 
                    expertise with the latest machine learning and artificial intelligence 
                    techniques</strong> to make the valuable information from unstructured 
                    data accessible, usable and actionable.
                </p>
                <h3 class="text-[14px] lg:text-[18px] text-[#F47625] font-light underline lg:py-5 xl:py-10">
                    EXPLORE IRAYA >
                </h3>
            </div>
            <div class="relative w-max mx-auto pt-10 lg:pt-15 xl:pt-20 pr-10">
                <!-- Background Card -->
                <div class="absolute top-5 lg:top-7 xl:top-11 left-8 lg:left-7 w-[82%] lg:w-[90%] xl:w-[93%] h-[125px] lg:h-[200px] xl:h-[250px] bg-[#F476256E] dark:bg-gradient-to-r from-[#F5A369] to-[#F47B25] rounded-2xl z-0 shadow-xl/30"></div>

                <!-- Foreground Image Card -->
                <div class="relative z-10 rounded-2xl overflow-hidden shadow-xl/30">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/image-1.jpg" alt="Large image" class="rounded-2xl w-[250px] lg:w-[350px] xl:w-[450px] h-auto">
                </div>
            </div>
        </div>
        <div class="h-10 lg:h-20"></div>

        <div class="w-full">
            <div class="">
                <h1 class="text-[25px] lg:text-[56px] text-[#F47625]  font-semibold text-center leading-[1.2]">
                    Customers 
                    <span class="text-[#666666] dark:text-[#C8CCD2]">we’ve worked </span>
                    <span class="text-[#2D918C]">with</span>
                </h1>
            </div>
            <div v-scroll-animate class="fade-in-up w-full py-5 lg:py-15">
                <div class="grid grid-cols-2 place-items-center gap-4 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-5 xl:gap-10">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Petronas_c.webp" class="w-auto lg:w-60 xl:w-auto dark:invert dark:brightness-125" alt="Image">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/capricorn_c.webp" class="w-auto lg:w-60 xl:w-auto dark:invert dark:brightness-125" alt="Image">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/aramco_c_n.webp" class="w-auto lg:w-60 xl:w-auto dark:invert dark:brightness-125" alt="Image">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/ConocoPhillips_Logo.webp" class="w-auto lg:w-60 xl:w-auto dark:invert dark:brightness-125" alt="Image">
                </div>
                <div class="h-10 lg:h-20"></div>
                <div class="grid grid-cols-2 place-items-center gap-4 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10 xl:gap-20">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/eneva_c.webp" class="dark:invert dark:brightness-125" alt="Image">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/tno_c.webp" class="dark:invert dark:brightness-125" alt="Image">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/neptune_c.webp" class="dark:invert dark:brightness-125" alt="Image">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/pttep_c.webp" class="dark:invert dark:brightness-125" alt="Image">
                </div>
            </div>
            <div class="py-10">
                <h1 class="text-[30px] lg:text-[55px] text-[#2D918C] font-semibold text-center">
                    Energy-<span class="font-light">to</span>-Market
                </h1>
                <p class="text-[14px] lg:text-[20px] text-center mt-10 text-[#666666] dark:text-[#C8CCD2] font-medium lg:px-20 xl:px-120">
                    Build your data transformation roadmap by merging the experiences 
                    and knowledge from upstream and the production information from the 
                    facilities and engineering to aid in the transition to new energy and renewables.
                </p>
            </div>
        </div>
    </div>

    <div class="w-full p-0 m-0">
        <div class="flex">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Artboard-2-copy.webp" class="w-34 sm:w-1/2 lg:w-1/3 block dark:hidden"/>
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Artboard-2-copy-2.webp" class="w-34 sm:w-1/2 lg:w-1/3 block dark:hidden"/>
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Artboard-2-copy-3.webp" class="w-34 sm:w-1/2 lg:w-1/3 block dark:hidden"/>
            <!-- Dark Mode -->
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Artboard-2-copy-Dark.png" class="w-34 sm:w-1/2 lg:w-1/3 hidden dark:block">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Artboard-2-copy-2-Dark.png" class="w-34 sm:w-1/2 lg:w-1/3 hidden dark:block">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Artboard-2-copy-3-Dark.png" class="w-34 sm:w-1/2 lg:w-1/3 hidden dark:block">
        </div>
    </div>
    <div class="h-10 lg:h-20"></div>
    <div v-scroll-animate class="fade-in-up px-10 lg:px-40 xl:px-145">
        <h1 class="text-[20px] lg:text-[40px] text-[#666666] dark:text-[#C8CCD2] font-normal text-center">
            Own the power of your data with Iraya’s
            <span class="text-[#2D918C] font-semibold">Data Atelier</span> and
            <span class="text-[#F47625] font-semibold">ElasticDocs™</span>
        </h1>
    </div>
    <div class="h-10 lg:h-40"></div>

    <div class="bg-[#F3F3F3] dark:bg-[#282929] w-full">
        <div class="flex flex-col lg:flex-row gap-5 justify-center">
            <div class="flex flex-col lg:flex-row lg:w-1/2 gap-5 lg:pl-5 xl:pl-50 lg:pr-5 xl:pr-20 px-5 lg:px-0">
                <div class="lg:w-1/2">
                    <div class="bg-[#FFFFFF] dark:bg-[#202124] py-5 lg:pt-50 px-4 h-auto lg:h-145 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                        <div class="">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/daCarousel_1.webp">
                        </div>
                        <h1 class="text-[20px] text-[#000000] dark:text-white font-normal leading-[1.2] py-5">
                            OIL AND GAS RE- EXPLORATION ON EXISTING FACILITIES
                        </h1>
                        <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] text-justify font-normal leading-[1.3]">
                            Rediscover old finds through a deep dive of all the exploration documents 
                            that are available to you and realize leads that were deemed uneconomical before​
                        </p>
                    </div>
                </div>

                <div class="flex flex-col gap-5 lg:w-1/2">
                    <div class="bg-[#FFFFFF] dark:bg-[#202124] pt-7 pb-5 px-4 h-auto lg:h-95 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                        <div class="">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/daCarousel_2.webp" class="w-[100%]">
                        </div>
                        <h1 class="text-[20px] text-[#000000] dark:text-white font-normal leading-[1.2] py-5">
                            EXPLORATION AND DATA SUSTAINABILITY
                        </h1>
                        <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] text-justify font-normal leading-[1.3]">
                            Be equipped with all the knowledge and experiences from all your documents 
                            made accessible and integrable into the way you work
                        </p>
                    </div>

                    <div class="bg-[#FFFFFF] dark:bg-[#202124] pt-7 pb-5 px-4 h-auto lg:h-100 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                        <div class="">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/daCarousel_3.webp"  class="w-[100%]">
                        </div>
                        <h1 class="text-[20px] text-[#000000] dark:text-white font-normal leading-[1.2] py-5">
                            RESPONSIBLE ENERGY TRANSITION
                        </h1>
                        <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] text-justify font-normal leading-[1.3]">
                            Unlocking the information from facillities are significant to energy transition and bringing energy to the market
                        </p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2">
                <div class="lg:pt-10 xl:pt-20 pb-0 px-5 lg:px-10 xl:px-20">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Data-Atelier-logo-wordmark-1.webp" class="w-[550px]">
                    <hr class="mt-4 h-[1px] bg-[#66666680] bg-opacity-20 border-0" />
                    <h1 class="text-[25px] text-[#535353] dark:text-[#C8CCD2] font-semibold leading-[1.3]">
                        Transforming
                        <span class="text-[#2D918C] text-[32px] font-bold">energy data</span>
                        for <br> sustainability.
                    </h1>
                    <h3 class="text-[18px] text-[#F47625] font-normal underline py-2 lg:py-10">
                        LEARN MORE >
                    </h3>
                </div>
                <div class="bg-gradient-to-r from-[#F5A369] to-[#F47B25] py-5 lg:py-10 xl:py-25 lg:px-10 xl:px-20 px-15 rounded-l-[50px] shadow-xl/30">
                    <p class="lg:text-[20px] xl:text-[25px] text-[#FFFFFF] text-justify font-medium leading-[1.3]">
                        Through the power of artificial intelligence, revolutionize the way you manage your data with Iraya’s Data Atelier.
                    </p>
                    <br>
                    <p class="lg:text-[20px] xl:text-[25px] text-[#FFFFFF] text-justify font-medium leading-[1.3]">
                        Sustainably accelerate access to your unstructured data and immediately dive 
                        into creating your own data processing, analysis, visualization and even your own applications.
                    </p>
                </div>
            </div>
        </div>
        <div class="h-10 lg:h-20 xl:h-40"></div>

        <div class="flex flex-col lg:flex-row lg:w-[95%] xl:w-[80%] mx-auto">
            <div v-scroll-animate class="fade-in-left lg:w-1/2">
                <div class="pb-0 px-5 lg:px-5 xl:px-10">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/EdocsTMLogo.webp">
                    <hr class="mt-4 h-[1px] bg-[#66666680] bg-opacity-20 border-0" />
                    <h1 class="text-[20px] text-[#535353] dark:text-[#C8CCD2] font-exo2 font-medium leading-[1.7] lg:py-5 xl:py-10">
                        Designed to enable engineers and geoscientists to browse through thousands 
                        of pages of reports in seconds and find geological analogs through sophisticated, 
                        pionering search-and-cluster techniques engineered by Iraya’s team for machine 
                        learning specialists and geoscientists.
                    </h1>
                    <h3 class="text-[18px] text-[#F47625] font-exo2 font-normal underline pt-2 lg:pt-0">
                        VIEW DEMO >
                    </h3>
                </div>
            </div>

            <div v-scroll-animate class="fade-in-right w-1/2 pt-10 lg:pt-12 xl:pt-10 px-5 lg:px-0">
                <div class="relative w-max mx-auto lg:pr-8 xl:pr-13">
                    <!-- Background Card -->
                    <div class="absolute top-[-30px] left-12 lg:left-9 w-81 lg:w-[92%] h-[200px] lg:h-[260px] xl:h-[350px] bg-[#F476256E] dark:bg-gradient-to-r from-[#F5A369] to-[#F47B25] rounded-2xl z-0 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"></div>

                    <!-- Foreground Image Card -->
                    <div class="relative z-10 rounded-2xl overflow-hidden shadow-xl/30">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/ElasticDocs-Excerpt-1024x576.webp" class="rounded-2xl w-85 lg:w-[450px] xl:w-[650px] h-auto">
                    </div>
                </div>
            </div>
        </div>
        <div class="h-0 lg:h-15 xl:h-30"></div>

        <div class="flex w-95 lg:w-[90%] xl:w-[65%] mx-auto">
            <div v-scroll-animate class="fade-in-left lg:w-1/2">
                <div class="hidden lg:block">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/iStock-529234139-edited2-1.png">
                </div>
            </div>
            <div v-scroll-animate class="fade-in-right lg:absolute ml-0 lg:ml-110 xl:ml-125 w-auto lg:w-[500px]  xl:w-[700px] pt-10">
                <div class="flex lg:gap-10 xl:gap-15 bg-[#F3F3F300] lg:pl-10 xl:pl-20 lg:pr-5 xl:pr-10 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-r-[20px]">
                    <div class="w-[100px] flex items-center pr-2 lg:pr-0">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/MagGlass.webp">
                    </div>
                    <div class="flex-row text-left">
                        <p class="lg:text-[15px] xl:text-[20px] text-[#2D918C] font-normal pb-2">
                            Identify possibilities of missed pay
                        </p>
                        <p class="lg:text-[14px] xl:text-[19px] text-[#666666] dark:text-[#C8CCD2] font-normal leading-[1.3]">
                            Easily unearth missed pay candidates and turn them into opportunities
                        </p>
                    </div>
                </div>
                <div class="h-5 lg:h-10"></div>
                <div class="flex lg:gap-10 xl:gap-15 bg-[#F3F3F300] lg:pl-10 xl:pl-20 lg:pr-5 xl:pr-10 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-r-[20px]">
                    <div class="w-[200px] flex items-center pr-2 lg:pr-0">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/DecisionMaking.webp">
                    </div>
                    <div class="flex-row text-left">
                        <p class="lg:text-[15px] xl:text-[20px] text-[#2D918C] font-normal pb-4 leading-[1.3]">
                            Expedite decision-making and analysis for upstream
                        </p>
                        <p class="lg:text-[14px] xl:text-[19px] text-[#666666] dark:text-[#C8CCD2] font-normal leading-[1.3]">
                            Overall, the ease of access to information accelerate decision-making steps and augment any needed analysis in the process
                        </p>
                    </div>
                </div>
                <div class="h-5 lg:h-10"></div>
                <div class="flex lg:gap-5 xl:gap-10 bg-[#F3F3F300] lg:pl-10 xl:pl-20 lg:pr-5 xl:pr-10 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-r-[20px]">
                    <div class="w-[100px] flex items-center pr-2 lg:pr-0">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/75.webp">
                    </div>
                    <div class="flex-row text-left">
                        <p class="lg:text-[15px] xl:text-[20px] text-[#2D918C] font-normal pb-2">
                            Reduce non-productive time
                        </p>
                        <p class="lg:text-[14px] xl:text-[19px] text-[#666666] dark:text-[#C8CCD2] font-normal leading-[1.3]">
                            Reduction in project turnover​
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-15"></div>
    </div>
    <div class="h-20"></div>

    <div v-scroll-animate class="fade-in-up lg:px-20 xl:px-130">
        <h1 class="text-[20px] lg:text-[40px] text-[#313131] dark:text-[#C8CCD2] font-normal text-center">
            Enrich your companies knowledge with Iraya’s
            <span class="text-[#2D918C] text-[30px] lg:text-[60px] font-semibold">ED2K </span>
            <span class="text-[#313131] dark:text-[#C8CCD2] text-[16px] lg:text-[20px] font-normal">and </span>
            <span class="text-[#F47625] text-[30px] lg:text-[60px] font-semibold">Bonaparte 400</span>
        </h1>
    </div>

    <div class="h-5"></div>
    <div class="flex flex-col lg:flex-row w-[100%] mx-auto">
        <div v-scroll-animate class="fade-in-left lg:w-1/2">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/irayaxeage-1.webp" class="w-[1000px]">
        </div>
        <div class="p-5 lg:w-1/2 lg:p-0">
            <div class="lg:pt-10 xl:pt-45 lg:pl-5 xl:pl-20 lg:pr-10 xl:pr-30">
                <h1 class="lg:text-[18px] xl:text-[26px] text-[#666666] dark:text-[#C8CCD2] font-medium">
                    <span class="text-[#F47625] lg:text-[25px] xl:text-[50px]">ED2K </span>
                    Amplify your
                    <span class="text-[#2D918C] lg:text-[20px] xl:text-[30px]">Earthdoc </span>
                    experience
                </h1>
                <hr class="mt-4 h-[1px] bg-[#66666680] bg-opacity-20 border-0" />
                <h1 class="lg:text-[14px] xl:text-[20px] text-[#535353] dark:text-[#C8CCD2] font-normal leading-[2] lg:py-5 xl:py-10">
                    Through a collaboration between Iraya Energies and EAGE, the ED2K initiative 
                    has been launched with EarthDoc’s repository of 70,000 scientific publications being 
                    processed using the latest in machine learning and artificial intelligence techniques 
                    and made available through ElasticDocs.
                </h1>
                <h3 class="lg:text-[16px] xl:text-[24px] text-[#F47625] font-normal underline">
                    GET YOUR FREE TRIAL >
                </h3>
            </div>
        </div>
    </div>

    <div class="h-5"></div>
    <div class="flex flex-col lg:flex-row w-[100%] mx-auto">
        <div v-scroll-animate class="fade-in-left p-5 lg:w-1/2 lg:p-0">
            <div class="lg:pl-5 xl:pl-50 lg:pt-25 xl:pt-55">
                <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/bonaparte400.webp">
                <hr class="mt-4 h-[1px] lg:w-120 xl:w-145 bg-[#66666680] bg-opacity-20 border-0" />
                <h1 class="lg:text-[16px] xl:text-[20px] text-[#535353] dark:text-[#C8CCD2] font-normal leading-[2] lg:py-5 xl:py-10">
                    More than 70 years of drilling history from the Bonaparte Basin in Australia resulting to 
                    half a million pages of geoscience and engineering knowledge and experience from more than 
                    400 wells, covering over 270,000 sq km can now be instantly accessed, searched and interpreted.
                    <div class="h-5"></div>
                    BONAPARTE 400 is the first in ElasticDocs’ Evergreen Series.
                </h1>
                <h3 class="lg:text-[18px] xl:text-[24px] text-[#F47625] font-normal underline">
                    GET YOUR FREE TRIAL >
                </h3>
            </div>
        </div>
        <div class="lg:w-1/2 justify-items-end">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/mapBonaparte-1.webp" class="w-[800px]">
        </div>
    </div>

    <div class="flex flex-col lg:flex-row w-[100%] mx-auto">
        <div v-scroll-animate class="fade-in-left p-5 lg:w-1/2 lg:p-0">
            <div class="lg:pl-5 xl:pl-50">
                <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Discover-the-new.webp" class="w-[200px] lg:w-[250px] xl:w-[350px]">
                <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Elasticdocs-on-premise-logo.webp">
                <h1 class="lg:text-[20px] xl:text-[28px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.3] py-5 lg:py-10">
                    Secure your documents with ElasticDocs On-Premise.
                    <div class="h-2 lg:h-5"></div>
                    A solution that gives you full control and enhanced data protection within your own infrastructure.
                </h1>
                <div class="flex">
                    <div class="flex items-center w-1/2">
                        <div  class="w-[40px] h-10">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Check.png">
                        </div>
                        <div class="pl-5">
                            <h1 class="text-[22px] text-[#000000] dark:text-white font-light pb-2">Enhanced Data Security</h1>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium">Reduce the risk of external breaches</p>
                        </div>
                    </div>
                    <div class="flex items-center w-1/2">
                        <div  class="w-[40px] h-10">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Check.png">
                        </div>
                        <div class="pl-5">
                            <h1 class="text-[22px] text-[#000000] dark:text-white font-light pb-2">Cost Control</h1>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2]">
                                Utilizing your existing hardware <br> and avoiding recurring cloud service fees
                            </p>
                        </div>
                    </div>
                </div>

                <div class="h-5"></div>
                <div class="flex">
                    <div class="flex items-center w-1/2">
                        <div  class="w-[40px] h-10">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Check.png">
                        </div>
                        <div class="pl-5">
                            <h1 class="text-[22px] text-[#000000] dark:text-white font-light pb-2">Customizable Infrastructure</h1>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium">Full control over server configuration</p>
                        </div>
                    </div>
                    <div class="flex items-center w-1/2">
                        <div  class="w-[40px] h-10">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Check.png">
                        </div>
                        <div class="pl-5">
                            <h1 class="text-[22px] text-[#000000] dark:text-white font-light pb-2">Improved Performance</h1>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2]">
                                Optimized performance and lower latency<br> as documents are stored and accessed <br>directly from your local network
                            </p>
                        </div>
                    </div>
                </div>

                <div class="h-5"></div>
                <div class="flex">
                    <div class="flex items-center w-1/2">
                        <div  class="w-[40px] h-10">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Check.png">
                        </div>
                        <div class="pl-5">
                            <h1 class="text-[22px] text-[#000000] dark:text-white font-light pb-2">Greater Flexibility</h1>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium">Enjoy the freedom to integrate systems</p>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium">and workflows, enhancing productivity</p>
                        </div>
                    </div>
                    <div class="flex items-center w-1/2">
                        <div  class="w-[40px] h-10">
                            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Check.png">
                        </div>
                        <div class="pl-5">
                            <h1 class="text-[22px] text-[#000000] dark:text-white font-light pb-2">Improved Performance</h1>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2]">Storing and managing data within your own</p>
                            <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-medium">infrastructure</p>
                        </div>
                    </div>
                </div>
                <div class="h-3 lg:h-5 xl:h-15"></div>
                <h3 class="lg:text-[18px] xl:text-[22px] text-[#F47625] font-normal underline">
                    TALK TO OUR EXPERTS >
                </h3>
            </div>
        </div>
        <div class="lg:w-1/2">
            <div class="justify-items-center lg:pt-2 xl:pt-8">
                <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/itson-1024x210.webp" class="w-[300px] lg:w-[400px] xl:w-[500px]">
            </div>
            <div class="justify-items-end pt-5 lg:pt-20">
                <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/on-premise-brand-identity-1024x595.webp" class="w-full lg:w-[900px]">
            </div>
        </div>
    </div>
    <div class="h-5 lg:h-15 xl:h-30"></div>

    <div v-scroll-animate class="fade-in-up w-[95%] lg:w-[95%] xl:w-[70%] mx-auto flex flex-col gap-5 xl:gap-10 lg:flex-row">
        <div class="lg:w-1/2 text-center p-10 rounded-bl-[60px] rounded-tr-[60px] shadow-[0_10px_40px_rgba(245,163,105,0.3)]">
            <h1 class="text-[18px] text-[#666666BD] dark:text-[#C8CCD2] italic font-medium pb-5">
                “With ElasticDocs, data can immediately be identified, 
                located, and retrieved through a text and image search.”
            </h1>
            <p class="text-[14px] text-[#F47625] font-medium italic">
                Microsoft Azure Partner success story
            </p>
        </div>

        <div class="lg:w-1/2 text-center p-10 rounded-bl-[60px] rounded-tr-[60px] shadow-[0_10px_40px_rgba(245,163,105,0.3)]">
            <h1 class="text-[18px] text-[#666666BD] dark:text-[#C8CCD2] italic font-medium pb-5">
                “With Iraya Energies, for example, we utilised existing operations to test 
                its proof of concept, which resulted in expedited decision- making for 
                upstream exploration activities in Mexico,”
            </h1>
            <p class="text-[14px] text-[#F47625] font-medium italic">
                Arni Laily Anwarrudin, Head of Petronas Ventures
            </p>
        </div>

        <div class="lg:w-1/2 text-center p-10 rounded-bl-[60px] rounded-tr-[60px] shadow-[0_10px_40px_rgba(245,163,105,0.3)]">
            <h1 class="text-[18px] text-[#666666BD] dark:text-[#C8CCD2] italic font-medium pb-5">
                “By focusing on the human drivers within the context of desirability, 
                feasibility, and viability, it is possible toaccelerate digital 
                adoption and achieve tangible outcomes aligned to the needs of the organization.”
            </h1>
            <p class="text-[14px] text-[#F47625] font-medium italic">
                Why people matter in a successful digitalisation strategy
            </p>
        </div>
    </div>
    <div class="h-10 lg:h-10 xl:h-20"></div>

    <div class="px-5 lg:px-20 xl:px-130">
        <h1 class="text-[18px] lg:text-[40px] text-[#313131] dark:text-[#C8CCD2] font-normal text-center">
            Building the
            <span class="text-[#2D918C] text-[25px] lg:text-[60px] font-medium">future of sustainable</span>
            digital transformation together
        </h1>
    </div>
    <div v-scroll-animate class="fade-in-up w-full py-5 lg:py-15 px-10 lg:px-5">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-30">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/azure_c.webp" class="dark:invert dark:brightness-125" alt="Large image">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Petronas_c.webp" class="dark:invert dark:brightness-125" alt="Large image">
        </div>
        <div class="h-10 lg:h-20"></div>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-10 xl:gap-30">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/bratexco-1.webp" class="dark:invert dark:brightness-125" alt="Large image">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/GOTECH-LOGO.webp" class="w-70 dark:invert dark:brightness-125" alt="Large image">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/Geo-Energy-TX.webp" class="w-80 dark:invert dark:brightness-125" alt="Large image">
        </div>
        <div class="h-10 lg:h-20"></div>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-10 xl:gap-30">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/corrigo_c_r.webp" class="dark:invert dark:brightness-125" alt="Large image">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/m3_c.webp" class="dark:invert dark:brightness-125" alt="Large image">
            <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/prowell_v_c_r.webp" class="dark:invert dark:brightness-125" alt="Large image">
        </div>
    </div>

    <div class="h-10"></div>
    <div class="flex flex-col w-[100%] mx-auto lg:flex-row gap-0 lg:gap-10 xl:gap-20">
        <div class="p-5 lg:w-1/2 lg:p-0">
            <div class="py-5 lg:py-10 lg:pl-10 xl:pl-60">
                <div class="bg-[#F5A369] rounded-[20px]">
                    <h1 class="text-[30px] text-[#FFFFFF] font-semibold pl-10">
                        Events
                    </h1>
                </div>

                <div class="h-5 lg:h-10"></div>
                <h1 class="text-[#2D918C] text-[20px] lg:text-[30px] font-medium">
                    Elasticdocs on premise training in kuala lumpur
                </h1>
                <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-normal leading-[1.5] py-2">
                    🚀 Get Ready to Elevate Your E&P Knowledge Management Skills and 
                    join us for the ElasticDocs On Premise Training Course.📅 Date: 10 
                    September 2024 📍 Venue: Kuala Lumpur, Malaysia🎯 Why Attend?*...
                </p>
                <hr class="mt-3 lg:mt-5 h-[1px] bg-[#66666680] bg-opacity-20 border-0" />

                <div class="h-5 lg:h-10"></div>
                <h1 class="text-[#2D918C] text-[20px] lg:text-[30px] font-medium">
                    Iraya at Energy Asia 2023
                </h1>
                <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-normal leading-[1.5] py-2">
                    Energy Asia 2023 is LIVE! 📣 Representing Iraya Energies are our CEO, 
                    Nina Marie Hernandez, AI Solutions Manager Jonathan Lee Monasterial 
                    and Philippines' Country...
                </p>
                <hr class="mt-3 lg:mt-5 h-[1px] bg-[#66666680] bg-opacity-20 border-0" />

                <div class="h-5 lg:h-10"></div>
                <h1 class="text-[#2D918C] text-[20px] lg:text-[30px] font-medium">
                    Iraya Energies at the EAGE Annual 2023
                </h1>
                <p class="text-[14px] text-[#535353] dark:text-[#C8CCD2] font-normal leading-[1.5] py-2">
                    ⭐ On to the next upcoming conference, the EAGE (European 
                    Association of Geoscientists and Engineers) Annual 2023 and 
                    we are excited to share the schedule of our presentation there! 🌆 This...
                </p>
            </div>
        </div>
        <div class="px-5 lg:w-1/2 lg:px-0">
            <div class="py-0 lg:py-10 lg:pr-10 xl:pr-60">
                <div class="bg-[#F4762529] rounded-[20px]">
                    <h1 class="text-[30px] text-[#F47625] font-semibold pl-10 underline">
                        View All Latest News >
                    </h1>
                </div>

                <div class="h-5 lg:h-10"></div>
                <div class="flex gap-3 lg:gap-10">
                    <div>
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/JLM-New-Energy-Nexus-2.webp" class="" alt="Large image">
                        <div>
                            <h1 class="text-[#F47625] text-[18px] font-bold pt-5">
                                14 Sept 2023
                            </h1>
                            <p class="text-[16px] lg:text-[22px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2] py-1">
                                Iraya ay New Energy Nexus Philippines’ Energy Connex Meetup
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-[#F47625] text-[18px] font-bold">
                            14 Sept 2023
                        </h1>
                        <p class="text-[16px] lg:text-[22px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2] py-2">
                            Our CEO at the Agora Pod Talk in Energy Asia 2023
                        </p>
                        <hr class="mt-2 h-[1px] bg-[#F47625] bg-opacity-20 border-0" />
                        
                        <div class="h-5"></div>
                        <h1 class="text-[#F47625] text-[18px] font-bold">
                            14 Sept 2023
                        </h1>
                        <p class="text-[16px] lg:text-[22px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2] py-2">
                            Iraya at the Energy Asia 2023
                        </p>
                        <hr class="mt-2 h-[1px] bg-[#F47625] bg-opacity-20 border-0" />

                        <div class="h-5"></div>
                        <h1 class="text-[#F47625] text-[18px] font-bold">
                            21 Mar 2022
                        </h1>
                        <p class="text-[16px] lg:text-[22px] text-[#535353] dark:text-[#C8CCD2] font-medium leading-[1.2] py-2">
                            Join Iraya at the Offshore Technology Conference Asia 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="h-0 lg:h-0 xl:h-40"></div>

</template>

<script setup>
import Earth from '~/components/earth.vue'
</script>