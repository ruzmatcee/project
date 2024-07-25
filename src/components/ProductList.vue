<!-- src/components/ProductList.vue -->
<template>
  <div class="container grid  gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-lg:pb-9 ">
    <ProductItem v-for="product in productStore.products" 
    :key="product.id" 
    :imageUrl="product.imageUrl"
    :title="product.title"
    :price="product.price"
    :id="product.id"  
     />
  </div>
</template>

<script setup>
  import ProductItem from '../components/Product.vue';
  import { useProductStore } from '../stores/products';

  const productStore = useProductStore();
  productStore.fetchProducts(); // Fetch products when the component is mounted

  defineProps({
  product: Array,
  required: true,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

