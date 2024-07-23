<template>

  <div class="rounded-lg flex-1 h-full flex flex-col lg:border border-gray-200 bg-white p-3 md:p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <router-link :to="'/product/' + id">
    <img class="mx-auto w-full  object-cover rounded" :src="imageUrl" alt="" />
  </router-link>
  <div class="flex-1 flex flex-col justify-between pt-6">
    <div class="flex items-center justify-between gap-4">
      <span class="text-xs line-clamp-1 sm:text-base font-medium text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-900 rounded lg:px-2 py-1">
        Up to 35% off
      </span>

      <div class="flex items-center gap-2">
        <button type="button" data-tooltip-target="tooltip-quick-look" class="max-lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
          <span class="sr-only">Quick look</span>
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
        <button    @click="removeFavourite" type="button"
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Add to Favorites</span>
            <svg class="h-5 w-5 fill-red-500"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
            </svg>
          </button>
      </div>
    </div>

    <a href="#" class="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mt-2 line-clamp-2 hover:underline">{{ title }}</a>

    <div class="mt-2 flex items-center gap-2">
      <div class="flex items-center">
        <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
        </svg>
        <!-- Repeat for the number of stars -->
      </div>
      <p class="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
    </div>

    <ul class="mt-2 max-md:hidden flex flex-wrap gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
      <li class="flex items-center gap-2">
        <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        </svg>
        Fast Delivery
      </li>
      <li class="flex max-md:hidden items-center gap-2">
        <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
        Best Price
      </li>
    </ul>

    <div class="mt-4 flex items-center justify-between">
      <p class="text-base sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white">${{ price }}</p>
      <button type="button" class="bg-blue-700 text-white rounded-lg px-4 pb-1 max-lg:pt-0.5 lg:py-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="h-5 w-5 inline lg:mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
        </svg>
       <span class="text-xs max-sm:hidden"> Add to cart</span>
      </button>
    </div>
  </div>
</div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useFavouriteStore } from '@/stores/favourites';
  
  const favouriteStore = useFavouriteStore();
  const props = defineProps({
    title: String,
    imageUrl: {
      type: [String, Array]
    },
    price: Number,
    id: Number,
    required: true
  });
  
  const removeFavourite = () => {
    favouriteStore.removeFavProduct(props.id);
  };
  </script>
  