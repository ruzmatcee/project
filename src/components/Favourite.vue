
<template>
  <div class="rounded-lg flex-1 h-full flex flex-col relative">
    <router-link :to="'/product/' + id">
      <img class="mx-auto w-full p-4 bg-[#f2f0ea] object-cover rounded-[30px]" :src="Array.isArray(imageUrl) ? imageUrl[0] : imageUrl" alt="" />
    </router-link>
    <button @click="removeFavourite" type="button" class=" rounded-full  absolute top-1 right-2">
            <svg width="40" height="40"   viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3.5" y="3" width="25" height="25" rx="50%" fill="white"/>
  <path :class="{ 'fill-red-500': favouriteStore.activeStates[id], 'stroke-[#a4a4a4] fill-white': !favouriteStore.activeStates[id] }" d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z"/>
  </svg>
    </button>
    <div class="flex-1 max-lg:gap-y-1 flex flex-col justify-between">
  
      <a href="#" class="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mt-2 line-clamp-2 hover:underline">{{ title }}</a>
  
      <div class="mt-2 flex items-center gap-2">
        <div class="flex items-center">
          <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
          </svg>
          <!-- Repeat for the number of stars -->
        </div>
        <p class="text-xs xs:text-sm font-medium text-gray-900 dark:text-white">5.0</p>
        <p class="line-clamp-1 text-xs xs:text-sm font-medium text-gray-500 dark:text-gray-400">(455 comments)</p>
      </div>
  
      <div class="mt-1 flex items-center justify-between">
        <div class="flex items-end">
          <p class="text-base sm:text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">${{ price }}</p>/
          <p class="text-base sm:text-lg md:text-sm font-semibold line-through text-gray-500">${{ price / 0.5  }}</p>
        </div>
        <button type="button" class="bg-[#f2f0ea] text-white rounded-full px-3 py-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg data-v-4004960e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
  <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
  <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
  </svg>
        </button>
      </div>
    </div>
  </div>
  
  
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useFavouriteStore } from '../stores/favourites';
  
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
  