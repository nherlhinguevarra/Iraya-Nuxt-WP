<template>
    <div class="h-5 lg:h-15"></div>
    <div class="px-5 text-center pt-10 pb-0 lg:pt-20 lg:pb-5 w-full lg:w-[90%] xl:w-[65%] mx-auto">
        <h1 class="text-[#666666] dark:text-white text-[40px] lg:text-[50px] xl:text-[60px] font-medium leading-[1.2]">
            Get in touch with  
            <span class="text-[#F47625] font-bold">Iraya </span>
            to
            <span class="text-[#2D918C] font-bold">unlock the potential</span>
            of your Data
        </h1>
    </div>
    <div class="px-5">
        <h1 class="text-center text-[#666666] dark:text-[#C8CCD2] text-[24px] lg:text-[34px] font-medium leading-[1.2] py-4">
            APAC & HQ (MALAYSIA)
        </h1>
        <div id="real-map" class="w-full lg:w-[500px] h-[350px] rounded-lg shadow-lg mx-auto"></div>
        <h1 class="text-center text-[#666666] dark:text-[#C8CCD2] text-[24px] lg:text-[26px] font-medium leading-[1.5] py-2 w-full lg:w-[40%] xl:w-[20%] mx-auto">
            Suite 8.01 Level 8 Menara Binjai
            No. 2 Jalan Binjai
            50450 Kuala Lumpur
            Malaysia
        </h1>
        <h1 class="text-center text-[#F5A369] text-[24px] lg:text-[26px] font-bold leading-[1.5] py-2">
            info@irayaenergies.com
        </h1>
        <h1 class="text-center text-[#F5A369] text-[24px] lg:text-[26px] font-bold leading-[1.5] py-2">
            kualalumpur@irayaenergies.com
        </h1>
        <h1 class="text-center text-[#2D918C] text-[24px] lg:text-[26px] font-bold leading-[1.5] py-2">
            +603 2386 7741
        </h1>

        <div class="w-[95%] lg:w-[85%] xl:w-[70%] mx-auto py-10">
            <hr class="mt-4 h-[1px] bg-[#66666680] bg-opacity-20 border-0"/>
        </div>
        <div class="w-full lg:w-[80%] xl:w-[60%] mx-auto flex flex-col lg:flex-row lg:gap-40">
            <div class="lg:w-1/2">
                <div>
                    <h1 class="text-center text-[#666666] dark:text-white text-[20px] font-bold leading-[1.5] py-2">
                        PHILIPPINES
                    </h1>
                    <p class="text-center text-[#666666] dark:text-[#C8CCD2] text-[20px] font-regular leading-[2] py-2">
                        19th Floor Room 1929, <br>
                        Marco Polo, Sapphire Road, <br>
                        Ortigas Center, <br>
                        Pasig City, Philippines 1600
                    </p>
                </div>
                <div class="h-5 lg:h-15"></div>
                <div>
                    <h1 class="text-center text-[#666666] dark:text-white text-[20px] font-bold leading-[1.5] py-2">
                        KINGDOM OF SAUDI ARABIA
                    </h1>
                    <p class="text-center text-[#666666] dark:text-[#C8CCD2] text-[20px] font-regular leading-[2] py-2">
                        GoTech Headquarters <br>
                        3rd Floor, Al-Othman Tower <br>
                        King Saud Road, PO Box 308 <br>
                        Al-Khobar – 31952 <br>
                        Kingdom of Saudi Arabia <br>
                        Tel: +966 13 853 3444
                    </p>
                </div>
            </div>

            <div class="lg:w-1/2">
                <div>
                    <h1 class="text-center text-[#666666] dark:text-white text-[20px] font-bold leading-[1.5] py-2">
                        SINGAPORE
                    </h1>
                    <p class="text-center text-[#666666] dark:text-[#C8CCD2] text-[20px] font-regular leading-[2] py-2">
                        Iraya Energies Pte. Ltd. <br>
                        16 Raffles Quay <br>
                        #33-01 Hong Leong Building <br>
                        Singapore 048581
                    </p>
                </div>
                <div class="h-5 lg:h-15"></div>
                <div>
                    <h1 class="text-center text-[#666666] dark:text-white text-[20px] font-bold leading-[1.5] py-2">
                        COLOMBIA
                    </h1>
                    <p class="text-center text-[#666666] dark:text-[#C8CCD2] text-[20px] font-regular leading-[2] py-2">
                        Geoil Energy <br>
                        Ac. 100 #17a-36 Of. 210 <br>
                        Bogota, Colombia <br>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="h-5 lg:h-20"></div>
</template>

<script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
    const L = window.L  // Leaflet global (since loaded via script tag)

    const map = L.map('real-map').setView([3.1594169837590487, 101.71870540740603], 15) // center + zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    L.marker([3.1594169837590487, 101.71870540740603]).addTo(map)
        .bindPopup('2, Lrg Binjai, Kuala Lumpur City Centre')
        .openPopup()
    })
</script>
