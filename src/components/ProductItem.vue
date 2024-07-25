<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <section v-else-if="singleProduct"
    class="py-4 font-medium mx-auto lg:container z-[101] max-lg:bg-[#f2f0ea] bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">

      <div class="sticky top-0 z-10 px-10 lg:px-0 lg:relative">
        <nav class="-top-10 max-lg:hidden relative flex">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 mb-1 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home page
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
                <a href="#"
                  class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Categories</a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
                <a href="#"
                  class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Shoes</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Sneakers</span>
              </div>
            </li>
          </ol>
        </nav>

        <div class="overflow-hidden pr-5 lg:relative lg:-top-3 h-full">
          <swiper :style="{ '--swiper-navigation-color': '#000' }" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2 lg:bg-[#f2f0ea] rounded-[30px] h-[300px] xs:h-[320px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
            @slideChange="onMainSlideChange">
            <swiper-slide v-for="(image, index) in singleProduct.images" :key="index">
              <img :src="image.image" :alt="'Image ' + index"
                class="max-lg:mt-10 lg:mb-10 w-[80%] xs:w-[75%] sm:w-[60%] md:w-[50%] lg:w-auto bg-cover mx-auto" />
            </swiper-slide>
          </swiper>

          <swiper @swiper="setThumbsSwiper" @slideChange="onThumbSlideChange" :spaceBetween="10" :slidesPerView="4"
            :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper hidden lg:block">
            <swiper-slide v-for="(image, index) in singleProduct.images" :key="index"
              :class="{ 'active-slide': activeIndex === index }" @click="onThumbnailClick(index, image[1])"
              class="ml-7 sm:ml-10 md:ml-12 lg:ml-8 p-4 bg-[#f2f0ea] rounded-[30px]">
              <img :src="image.image" :alt="'Thumbnail ' + index" class="relative bg-cover" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="px-6 bg-white pt-10 max-lg:rounded-[50px] lg:px-0 border-t z-40  mt-6 sm:mt-8 lg:mt-0">
        <!-- Product description and other details -->
        <div class="pt-2 flex justify-between items-center">
          <div class="flex gap-x-2">
            <img src="../../public/—Pngtree—3d render male avatar with_7497855.png" alt=""
              class="rounded-full bg-black w-6 h-6 ">
            <p class=""> Snreker</p>
          </div>
          <sub>#120432023</sub>
        </div>
        <h1 class="mt-4 text-xl font-semibold text-gray-900 sm:text-4xl dark:text-white">
          {{ singleProduct.title }}
        </h1>
        <div class="mt-4  sm:gap-4 flex flex-col gap-y-4">
          <div class="flex items-center gap-2 mt-2 sm:mt-0">
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>/
            <a href="#" class="text-sm font-medium leading-none text-gray-900 dark:text-white">{{ singleProduct.stock *
              1.6 }}
              Comments</a>
          </div>
          <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
            ${{ (currentStock === 0 && selectedSize && selectedColor) ? 0 : singleProduct.price }}
          </p>
        </div>
        <div class="mt-6">

          <!-- Sizes -->
          <div ref="sizeSection" class="mt-6">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Sizes</h2>
            <div class="flex gap-2 mt-2">
              <div v-for="(size, index) in singleProduct.sizes" :key="index" :class="{
                'px-3 py-1.5 border rounded-lg': true,
                'opacity-25': !isSizeAvailable(size) && selectedSize !== size,
                'bg-gray-200': selectedSize === size || (!selectedSize && !isSizeAvailable(size))
              }" class="px-2 py-1 rounded cursor-pointer text-gray-900 dark:bg-gray-700 dark:text-white"
                @click="selectSize(size)">
                {{ size }}
              </div>
            </div>
            <p v-if="!selectedSize && showError" class="text-red-500 mt-2">Size tanlash kere</p>
          </div>

          <!-- Colors -->
          <div ref="colorSection" class="mt-4 relative">
            <div class="flex gap-x-3">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white">Colors</h2>
            </div>
            <div class="flex gap-2 mt-2">
              <div v-for="(color, index) in singleProduct.colors" :key="index" :class="{
                'px-3 py-1.5 border rounded-lg': true,
                'opacity-25': !isColorAvailable(color) && selectedColor !== color,
                'bg-gray-200': selectedColor === color || (!selectedColor && !isColorAvailable(color))
              }" class="grid place-items-center p-2 rounded-lg cursor-pointer m-1" @click="handleColorClick(color)">
                <div class="w-6 h-6 rounded-full" :style="{ backgroundColor: color }"></div>
              </div>
            </div>
            <p v-show="!selectedColor && showError" class="text-red-500 mt-2 absolute -bottom-6 left-0">Color tanlash kere
            </p>
          </div>

        </div>

        <div class="flex items-center gap-x-4 mt-10">
          <div class="px-2.5 py-1 border rounded-lg hover:bg-gray-100">
            <i class="fa-solid fa-minus"></i>
          </div>
          <span>1</span>
          <div class="px-2.5 py-1 border rounded-lg hover:bg-gray-100">
            <i class="fa-solid fa-plus"></i>
          </div>
          <span class="font-medium text-green-500">There are {{ currentStock }} products</span>
          <p v-show="showError && currentStock <= 0" class="text-red-500">Tanlangan mahsulot hozirda sotuvda yo'q.</p>
        </div>

        <div
          class="w-full mt-8 flex hover:bg-blue-500 hover:text-white justify-between items-center px-4 py-3 border rounded-lg">
          Term payment from $30 per month <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="mt-6 sm:gap-4 sm:items-center  sm:flex sm:mt-8">
          <!-- Add to Cart Button -->
          <button @click="addCard" :class="[
            'text-white w-full lg:w-11/12 mt-4 py-3 px-2 sm:mt-0 bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center',
            { 'opacity-25 cursor-not-allowed': currentStock === 0 && selectedSize && selectedColor }
          ]" role="button" :disabled="currentStock === 0 && selectedSize && selectedColor">
            <svg class="w-6 h-6 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
            </svg>
            Add to cart
          </button>

          <!-- Toggle Favourite Button -->
          <div :class="['nav-mobile', { 'bg-white transition duration-300 max-lg:border': isScrolled }]"
            class="max-lg:flex justify-center items-center max-lg:w-full max-lg:fixed top-0 left-0 z-[103] max-lg:h-[4.5rem] max-lg:rounded-b-[50px] rounded-lg">
            <button @click="toggleFavourite" :class="[
              'flex fixed max-lg:top-5 max-lg:right-10 lg:relative items-center justify-center lg:py-0.5 lg:px-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full lg:rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
              { 'opacity-25 cursor-not-allowed': currentStock === 0 && selectedSize && selectedColor }
            ]" role="button" :disabled="currentStock === 0 && selectedSize && selectedColor">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.5" y="3" width="25" height="25" rx="50%" fill="white" />
                <path
                  :class="{ 'fill-red-500': favouriteStore.activeStates[singleProduct.id], 'stroke-black lg:stroke-[#a4a4a4] fill-white': !favouriteStore.activeStates[singleProduct.id] }"
                  d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" />
              </svg>
            </button>
          </div>
        </div>
        <hr class="my-6 md:my-8 border-gr, ay-200 dark:border-gray-800" />
        <p class="mb-6 text-gray-500 dark:text-gray-400">{{ singleProduct.description }}</p>
        <p class="text-gray-500 dark:text-gray-400">Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast Wi-Fi
          6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID.</p>
      </div>

    </div>
  </section>
</template>
<script setup>
import { ref, computed, nextTick, watch, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useProductSingleStore } from '../stores/productSingle';
import { useRoute } from 'vue-router';
import { useFavouriteStore } from '../stores/favourites';

const route = useRoute();
const productStore = useProductSingleStore();
const favouriteStore = useFavouriteStore();

productStore.fetchProduct(route.params.id);

const selectedSize = ref(null);
const selectedColor = ref(null);
const showError = ref(false);
const currentStock = ref(0);

const sizeSection = ref(null);
const colorSection = ref(null);

const singleProduct = computed(() => productStore.product);
const loading = computed(() => productStore.loading);

const toggleFavourite = () => {
  if (singleProduct.value && singleProduct.value.id) {
    favouriteStore.activeStates[singleProduct.value.id] = !favouriteStore.activeStates[singleProduct.value.id];
    favouriteStore.getAddFavPro(singleProduct.value);
  } else {
    console.error('Product ID is missing');
  }
};

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY >= 280;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const thumbsSwiper = ref(null);
const activeIndex = ref(0);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const onMainSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
  if (thumbsSwiper.value) {
    thumbsSwiper.value.slideTo(swiper.activeIndex);
  }
};

const onThumbSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
};

const onThumbnailClick = (index) => {
  activeIndex.value = index;
  if (thumbsSwiper.value) {
    thumbsSwiper.value.slideTo(index);
  }
};

const addCard = async () => {
  if (!selectedSize.value || !selectedColor.value) {
    showError.value = true;

    await nextTick();
    if (!selectedSize.value) {
      sizeSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (!selectedColor.value) {
      colorSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  if (currentStock.value <= 0) {
    showError.value = true;
    await nextTick();
    if (sizeSection.value) {
      sizeSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  showError.value = false;
  // Proceed with adding the item to the cart or further actions
};

const isSizeAvailable = (size) => {
  if (selectedColor.value) {
    const image = singleProduct.value.images.find(img => img.color === selectedColor.value);
    return image ? image.size.includes(size.toString()) : false;
  }
  return true;
};

const isColorAvailable = (color) => {
  if (selectedSize.value) {
    const image = singleProduct.value.images.find(img => img.size.includes(selectedSize.value.toString()));
    return image ? image.color === color : false;
  }
  return true;
};

const updateStockQuantity = () => {
  if (selectedSize.value && selectedColor.value) {
    const image = singleProduct.value.images.find(img =>
      img.color === selectedColor.value && img.size.includes(selectedSize.value.toString())
    );
    currentStock.value = image ? image.quantity : 0;
  } else {
    currentStock.value = singleProduct.value.stock;
  }
};

const selectSize = (size) => {
  selectedSize.value = size;
  updateStockQuantity();
};

const selectColor = (color) => {
  selectedColor.value = color;
  updateStockQuantity();
};

const handleColorClick = (color) => {
  selectColor(color);
  onColorClick(color);
};

const onColorClick = (color) => {
  const imageIndex = singleProduct.value.images.findIndex(img => img.color === color);
  if (imageIndex !== -1) {
    activeIndex.value = imageIndex;
    if (thumbsSwiper.value) {
      thumbsSwiper.value.slideTo(imageIndex);
    }
    const mainSwiperElement = document.querySelector('.mySwiper2.swiper');
    if (mainSwiperElement) {
      const mainSwiper = mainSwiperElement.swiper;
      mainSwiper.slideTo(imageIndex);
    }
    updateStockQuantity();
  }
};

watch(singleProduct, (newProduct) => {
  if (newProduct) {
    currentStock.value = newProduct.stock;
  }
}, { immediate: true });

const modules = [FreeMode, Navigation, Thumbs];
</script>


<style scoped>
.mySwiper {
  margin-top: 10px;
}

@media (max-width: 1024px) {
  .mySwiper {
    display: none;
  }
}



.swiper-slide {
  display: grid !important;
  place-items: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}

.active-slide {
  border: 2px solid #20202038;
  /* Sizning rang tanlovingiz */
}
</style>