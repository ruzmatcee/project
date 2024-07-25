<template >
    <div class="home w-full container py-8 mx-auto overflow-hidden">
      <swiper
      :pagination="true"
        :loop="true"
        :modules="modules"
        :grab-cursor="true"
        :autoplay="{ delay: 3000 }"
    
        class="mySwiper flex h-[250px] md:h-[500px] rounded-lg">
        <swiper-slide
          class="bg-cover text-white w-full bg-[url(/carousel/Slide-hp-1.webp)] ">
          <div class="flex flex-col gap-y-1 sm:gap-y-3 justify-center py-2 px-4 sm:px-8 md:px-12 lg:px-16 h-full w-full">
            <span class="text-[0.6rem] md:text-xs lg:text-sm uppercase">Trending Now</span>
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-medium">Ecomus Deshion</h2>
            <h1 class="text-3xl md:text-5xl xl:text-[4rem] xl:-mt-3 font-bold">Wireless Headphones</h1>
            <p class="text-xs sm:text-sm md:text-base w-[90%] sm:w-[70%] lg:w-[45%]">Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.</p>
           <div class="flex gap-x-3 mt-2 text-[0.65rem] md:text-xs"> 
            <button class="flex items-center gap-x-2 bg-blue-500 px-2 sm:px-4 sm:py-3 rounded text-center text-white">SHOP NOW <i class="fa-solid text-[9px] fa-chevron-right"></i></button>
            <button class="flex items-center gap-x-2  px-4 py-3  text-center ">LEARN MORE</button></div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="bg-cover bg-right  w-full bg-[url(/carousel/banner1_190f96ae-9055-4be1-b801-516b11f55fc0.webp)] ">
          <div class="flex flex-col gap-y-1 sm:gap-y-3 justify-center py-2 px-4 sm:px-8 md:px-12 lg:px-16 h-full w-full">
            <span class="text-[0.6rem] md:text-xs lg:text-sm uppercase">Trending Now</span>
            <h2 class="text-2xl md:text-3xl xl:text-4xl  font-medium">Winter fashion</h2>
            <h1 class="text-3xl md:text-5xl xl:text-[4rem] xl:-mt-3  font-bold">Summer Shoes</h1>
            <p class="text-xs sm:text-sm md:text-base w-[90%] sm:w-[70%] lg:w-[45%]">Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.</p>
           <div class="flex gap-x-3 mt-2 text-[0.65rem] md:text-xs"> 
            <button class="flex items-center gap-x-2 bg-blue-500 px-2 sm:px-4 sm:py-3 rounded text-center text-white">SHOP NOW <i class="fa-solid text-[9px] fa-chevron-right"></i></button>
            <button class="flex items-center gap-x-2  px-4 py-3  text-center ">LEARN MORE</button></div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="bg-cover text-white bg-top w-full bg-[url(/carousel/Slide-hp-3.webp)] ">
          <div class="flex flex-col gap-y-1 sm:gap-y-3 justify-center py-2 px-4 sm:px-8 md:px-12 lg:px-16 h-full w-full">
            <span class="text-[0.6rem] md:text-xs lg:text-sm uppercase">Top Sale This Month</span>
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-medium">Hot Collection</h2>
            <h1 class="text-3xl md:text-5xl xl:text-[4rem]  xl:-mt-3 font-bold">Virtual glasses</h1>
            <p class="text-xs sm:text-sm md:text-base w-[90%] sm:w-[70%] lg:w-[45%]">Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.</p>
           <div class="flex gap-x-3 mt-2 text-[0.65rem] md:text-xs"> 
            <button class="flex items-center gap-x-2 bg-blue-500 px-2 sm:px-4 sm:py-3 rounded text-center text-white">SHOP NOW <i class="fa-solid text-[9px] fa-chevron-right"></i></button>
            <button class="flex items-center gap-x-2  px-4 py-3  text-center ">LEARN MORE</button></div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="bg-cover text-white w-full bg-[url(/carousel/baby-slide2.webp)] ">
          <div class="flex flex-col gap-y-1 sm:gap-y-3 justify-center py-2 px-4 sm:px-8 md:px-12 lg:px-16 h-full w-full">
            <span class="text-[0.6rem] md:text-xs lg:text-sm uppercase">Hot Right Now</span>
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-medium">Winter Fashion</h2>
            <h1 class="text-3xl md:text-5xl xl:text-[4rem]  xl:-mt-3 font-bold">Discover the latest items</h1>
            <p class="text-xs sm:text-sm md:text-base w-[90%] sm:w-[70%] lg:w-[45%]">Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.</p>
           <div class="flex gap-x-3 mt-2 text-[0.65rem] md:text-xs"> 
            <button class="flex items-center gap-x-2 bg-blue-500 px-2 sm:px-4 sm:py-3 rounded text-center text-white">SHOP NOW <i class="fa-solid text-[9px] fa-chevron-right"></i></button>
            <button class="flex items-center gap-x-2  px-4 py-3  text-center ">LEARN MORE</button></div>
          </div>
        </swiper-slide>
      </swiper>

    </div>
  </template>
  <script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import {
    Pagination,
    Autoplay
  } from "swiper/modules";
  import "swiper/css/pagination";
  import "swiper/css";
  
  const modules = [Pagination, Autoplay];
  
  </script>

<style>

@media (max-width: 1024px) {
  .home .swiper-pagination-bullet-active {
  width: 15px;

  }

  .home .swiper-pagination {

    bottom: 0px !important;
  }
}
</style>
