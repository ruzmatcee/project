<template>
  <header class="w-full max-lg:fixed max-lg:border-t z-[99] max-lg:bg-gray-100 bottom-0 lg:top-4 lg:relative">
    <nav class="container md:text-sm lg:text-base 3xl:text-lg mx-auto z-40 font-medium text-[#010101] flex justify-center">
      <div class="w-full">
        <div class="na pb-4 relative z-40 w-full max-lg:py-2 flex items-center justify-end lg:justify-between">
          <a href="#" class="flex max-lg:hidden ml-0 md:mr-6 items-center mx-auto brand max-w-xl">
            <span class="text-xl font-playwrite md:text-xl lg:text-xl 2xl:text-4xl z-30">RUZMATCEE</span>
          </a>
          <div class="container max-lg:hidden max-w-xs xl:max-w-xl mx-auto">
            <form class="flex items-center space-x-2 py-0.5">
              <div class="relative w-full">
                <input 
                  type="text"  
                  placeholder="Search for products..." 
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div class="flex max-lg:justify-stretch max-lg:w-full">
            <router-link class="flex max-lg:w-full" to="/">
              <div :class="{'text-blue-600': isActive('/')}" class="hover:bg-zinc-200 cursor-pointer flex justify-center items-center gap-x-2 max-lg:w-full py-1.5 px-3 rounded-lg">
                <i class="fa-regular fa-shop"></i> <span class="hidden sm:block">Shopping</span>
              </div>
            </router-link>
            <router-link class="flex max-lg:w-full" to="/category">
              <div :class="{'text-blue-600': isActive('/category')}" class="lg:hidden hover:bg-zinc-200 cursor-pointer flex justify-center items-center gap-x-2 max-lg:w-full py-1.5 px-3 rounded-lg">
                <i class="fa-regular fa-search"></i> <span class="hidden sm:block">Category</span>
              </div>
            </router-link>
            <router-link class="flex max-lg:w-full" to="/favourite">
              <div :class="{'text-blue-600': isActive('/favourite')}" class="hover:bg-zinc-200 cursor-pointer flex justify-center items-center gap-x-2 max-lg:w-full py-1.5 px-3 rounded-lg">
                <i class="fa-regular fa-heart"></i> <span class="hidden sm:block">Favourites</span>
              </div>
            </router-link>
            <router-link class="flex max-lg:w-full" to="/order">
              <div :class="{'text-blue-600': isActive('/order')}" class="hover:bg-zinc-200 cursor-pointer flex justify-center items-center gap-x-2 max-lg:w-full py-1.5 px-3 rounded-lg ml-1">
                <i class="fa-regular fa-cart-shopping"></i><span class="hidden sm:block"> My cart </span>
              </div>
            </router-link>
            <router-link class="flex max-lg:w-full" to="/profile">
              <div :class="{'text-blue-600': isActive('/profile')}" class="hover:bg-zinc-200 group cursor-pointer flex justify-center items-center gap-x-2 max-lg:w-full py-1.5 px-3 rounded-lg ml-1">
                <div class="w-6 h-6 rounded-full grid place-items-center bg-slate-200 duration-300"><i class="fa-regular fa-user"></i></div>
                <h1 class="hidden sm:block"><span class="lg:hidden">Cabinet</span><span class="max-lg:hidden">My account</span></h1>
              </div>
            </router-link>
          </div>
        </div>
        <div class="max-lg:hidden flex justify-between relative">
          <div class="z-10 w-full relative bg-[#f3f4f6] px-8 rounded-lg">
            <div class="text-center w-full items-center md:flex my-2 relative">
              <button @click="toggleDropdown('categories')"
                class="flex z-10 w-full md:w-52 xl:w-48 h-10 items-center justify-between md:mr-4 px-5 text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                type="button">
                All categories
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div v-show="categories" id="dropdown"
                class="z-10 max-md:w-full absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm px-3 text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                  <li>
                    <button type="button"
                      class="inline-flex w-full rounded px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button type="button"
                      class="inline-flex w-full rounded px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                      Templates
                    </button>
                  </li>
                  <li>
                    <button type="button"
                      class="inline-flex w-full rounded px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                      Design
                    </button>
                  </li>
                  <li>
                    <button type="button"
                      class="inline-flex w-full rounded px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <ul
                  class="flex relative justify-between gap-x-4 py-4 rounded-lg max-md:hidden md-block md:flex-row md:my-0 md:border-0">
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Home</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Best
                      Sellers</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Gift
                      Ideas</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Games</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Pc</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Music</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block hover:text-orange-500 lg:border-0 lg:p-0">Books</a>
                  </li>
                  <li>
                    <a href="#"
                      class="md:hidden lg:block hover:text-orange-500 lg:border-0 lg:p-0">Electronics</a>
                  </li>
                  <li>
                    <a href="#"
                      class="md:hidden lg:block hover:text-orange-500 lg:border-0 lg:p-0">Top deals</a>
                  </li>
                  <li>
                    <a href="#"
                      class="md:hidden lg:block hover:text-orange-500 lg:border-0 lg:p-0">Toys</a>
                  </li>
                  <li>
                    <a href="#"
                      class="md:hidden lg:block hover:text-orange-500 lg:border-0 lg:p-0">Beauty</a>
                  </li>
                </ul>
              </div>        
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const categories = ref(false);
const profile = ref(false);
const search = ref(false);
const activeDropdown = ref(null);

const toggleDropdown = (dropdown) => {
  if (activeDropdown.value && activeDropdown.value !== dropdown) {
    closeDropdown();
  }
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = dropdown;
  }
};

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};

watchEffect(() => {
  categories.value = activeDropdown.value === 'categories';
  profile.value = activeDropdown.value === 'profile';
  location.value = activeDropdown.value === 'location';
  search.value = activeDropdown.value === 'search';
});
</script>

<style scoped>

.na.scrolled {
  background: #1b1b1b !important;
  transition: all 700ms linear;
  color: white;
}
</style>
