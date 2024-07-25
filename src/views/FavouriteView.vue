<template>
  <div class="container grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 top-4 relative gap-2 lg:gap-3">
    <Favourite
      v-for="product in favouriteStore.favourites"
      :key="product.id"
      :title="product.title"
      :imageUrl="product.imageUrl"
      :price="product.price"
      :id="product.id"
    />
  </div>
</template>

<script setup>
import { useFavouriteStore } from '../stores/favourites';
import Favourite from '../components/Favourite.vue';

const favouriteStore = useFavouriteStore();

</script>

