<template>
    <div class="relative w-screen max-w-full">
    <!-- Fixed background image -->
        <div class="absolute inset-0 bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BACKGROUND.webp')] 
        dark:bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BG-DARK.png')] 
        bg-cover bg-top bg-no-repeat bg-fixed z-0"></div>

        <div class="relative justify-center z-10 flex w-full h-full">
            <div class="w-3/4 mt-20 mb-20 p-4">
                <h1 class="text-[#535353] text-4xl lg:text-5xl leading-[3rem] lg:leading-[3.75rem] mb-8 pr-0 lg:pr-40">
                    <span class="text-[#666666]">Combining</span>
                    <span class="text-[#F47625] font-bold"> Engineering</span> 
                    and <span class="text-[#2D918C] font-bold">Geoscience Expertise</span> 
                    with <span class="font-bold">BIG DATA KNOWLEGDE</span>
                </h1>
                <p class="text-[#666666] text-base font-normal mb-6">
                    Iraya Energies was founded in <strong>2016</strong> and has a regional presence in 
                    <strong>Kuala Lumpur, Stavanger, and Houston.</strong>
                    <br><br>
                    Our team of data scientists, engineers, and geoscientists uses Python for programming and a range of 
                    technologies for database-building, machine learning algorithms, web visualization, front- and back-end 
                    applications to process these massive amounts of historic and new data. 
                </p>
                <h2 class="text-[#535353] text-3xl mb-14">the
                    <span class="text-[#2D918C] font-bold">management </span>
                    <span class="text-[#F47625] font-bold">team</span>
                </h2>
                
                <!-- MANAGEMENT TEAM INFO -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 sm:px-8 md:px-16 lg:px-36 bg-white dark:bg-transparent">
                    <!-- Card 1 -->
                    <div v-scroll-animate class="slide-in-up text-start mb-10">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/093_200120-kopi-1-2.png" 
                        alt="Nina Marie Hernandez" class="mx-auto mb-4 dark:bg-neutral-900 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-tl-[60px] rounded-br-[60px]
                        w-full max-w-xs sm:max-w-sm h-auto object-cover"/>
                        <h3 class="font-bold text-center text-[#535353] text-xl">NINA MARIE HERNANDEZ</h3>
                        <p class="italic text-center text-[#535353] text-xl mb-4">CHIEF EXECUTIVE OFFICER</p>
                        <p class="text-[#535353] text-sm pl-3 pr-3">
                            Nina founded Iraya Energies to push the boundaries of how machines can help humans in understanding our earth. 
                            She has international experience working in various technical, sales, and business development roles, 
                            across the world including working as Asia Business Development Manager for Schlumberger in the petrotechnical 
                            consulting group.
                            <br><br>
                            She is a rock physicist by background and holds an MSc in Petroleum Engineering from the 
                            Technical University of Denmark.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div v-scroll-animate class="slide-in-up text-start mb-10">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/FrancoisBaillard-2.png" 
                        alt="Francois Baillard" class="mx-auto mb-4 dark:bg-neutral-900 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-tl-[60px] rounded-br-[60px]
                        w-full max-w-xs sm:max-w-sm h-auto object-cover" />
                        <h3 class="font-bold text-center text-[#535353] text-xl">FRANCOIS BAILLARD</h3>
                        <p class="italic text-center text-[#535353] text-xl mb-4">CHIEF TECHNICAL OFFICER</p>
                        <p class="text-[#535353] text-sm pl-3 pr-3">
                            Francois comes with a wide experience in geoscience working in technical, sales, and management roles for CGG and Total. 
                            He is also the author of numerous technical publications for EAGE, APGCE, and IPA.
                            <br><br>
                            He holds an MSc in Physics from Telecom Physics, Strasbourg, France, 
                            and an MSc in Innovation and Entrepreneurship from HEC, Paris.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div v-scroll-animate class="slide-in-up text-start mb-10">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/yf.webp" 
                        alt="Yang Fairuz" class="mx-auto mb-4 dark:bg-neutral-900 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-tl-[60px] rounded-br-[60px]
                        w-full max-w-xs sm:max-w-sm h-auto object-cover" />
                        <h3 class="font-bold text-center text-[#535353] text-xl">YANG FAIRUZ</h3>
                        <p class="italic text-center text-[#535353] text-xl mb-4">CHIEF COMMERCIAL OFFICER</p>
                        <p class="text-[#535353] text-sm pl-3 pr-3">
                            Yang Fairuz oversees and drives Iraya’s commercial strategy and activities. 
                            She is pivotal in identifying growth opportunities, exploring new business trends, 
                            and leading efforts to form strategic partnerships. 
                            She has 19 years of experience in the oil and gas industry, and 7 years in the 
                            pharmaceutical and healthcare services industry.
                        </p>
                    </div>

                    <!-- Card 4 -->
                    <div v-scroll-animate class="slide-in-uptext-start">
                        <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Ian-Panganiban-2.png" 
                        alt="Ian Panganiban" class="mx-auto mb-4 dark:bg-neutral-900 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-tl-[60px] rounded-br-[60px]
                        w-full max-w-xs sm:max-w-sm h-auto object-cover" />
                        <h3 class="font-bold text-center text-[#535353] text-xl">IAN PANGANIBAN</h3>
                        <p class="text-center italic text-[#535353] text-xl mb-4">HEAD OF CLOUD INFRASTRUCTURE</p>
                        <p class="text-[#535353] text-sm pl-3 pr-3">
                            Ian makes sure that geoscience Big Data is stored, processed, accessed and integrated effectively, 
                            using handy tools such as SQL, NoSQL, Django, Flask among others. He is also an expert WebGIS specialist.
                            <br><br>
                            He holds a degree in BSc Geodetic Engineering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>