<template>
  <div class="relative w-screen max-w-full overflow-hidden">
    <!-- Fixed background image -->
    <div class="absolute inset-0 bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BACKGROUND.webp')] 
      dark:bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BG-DARK.png')] 
      bg-cover bg-top bg-no-repeat bg-fixed z-0"></div>

    <div class="relative z-10 flex flex-col lg:flex-row w-full h-full px-14 lg:px-4 py-10">
      <!-- SIDE MENU -->
      <div class="w-full mt-32 ml-32 lg:w-1/4 mb-10 hidden lg:block">
        <h1 class="text-[#F47625] text-2xl mb-8 font-semibold">SERVICES</h1>
        <ul>
          <li><NuxtLink to="/services/data-factory" class="text-[#535353] text-base font-medium mb-1 hover:text-black dark:hover:text-white"
            >Data Factory</NuxtLink></li>
          <li><NuxtLink to="/services/knowledge-workflows" class="text-[#535353] text-base font-medium mb-1 hover:text-black dark:hover:text-white"
            >Knowledge Workflows</NuxtLink></li>
        </ul>
      </div>

      <!-- MAIN CONTENT -->
      <div class="w-full mt-12 mb-12 lg:w-3/4">
        <h1 class="text-[#535353] text-4xl lg:text-5xl leading-tight mb-10 pr-0 lg:pr-40">
          <span class="text-[#666666]">We are</span>
          <span class="italic text-[#F47625] font-bold"> experts</span>
          in <span class="text-[#2D918C] font-bold">data mining</span> with experience across the world
        </h1>

        <h2 class="text-[#F47625] text-2xl lg:text-3xl font-bold mb-5">
          DATA FACTORY (DIGITALIZATION)
        </h2>
        <p class="text-[#666666] text-base mb-5 pr-0 lg:pr-44">
          The data mining includes initial download, cataloging, cleanup, quality control of your data
          creating an advanced and functional web-based geoscience data repository including:
        </p>
        
        <ul class="text-[#666666] text-base list-disc ml-6 mb-5 pr-0 lg:pr-44">
          <li>Crawl & Scrape</li>
          <li>
            Automated extraction of engineering and geoscience data from the web, open-source datasets, including:
            <ul class="list-disc ml-6 mt-2">
              <li>LAS & DLIS</li>
              <li>SEGYs</li>
              <li>DOCX, XLSX, PPTX, TXT</li>
              <li>BMP, JPEG</li>
              <li>Metadata</li>
              <li>Papers</li>
              <li>ZIP files</li>
            </ul>
          </li>
          <li>Batch clean, sort of online and offline datasets</li>
          <li>Database manipulation</li>
          <li>CRUD (Create, Read, Update & Delete)</li>
          <li>DAVE (Delete, Add, View & Edit)</li>
        </ul>

        <p class="text-[#666666] text-base pr-0 lg:pr-44">
          Get your images organized through image classification for efficient processing and analysis.
          Move from cats vs dogs classification to geoscience image classes like maps, seismic, charts, etc.
          <br><br>
          Our custom CNN will teach the machine to learn the texture and features of relevant data.
          <br><br>
          Classified images are displayed in our ElasticDocs Intuitive Knowledge Container.
        </p>
      </div>
    </div>
  </div>
</template>
