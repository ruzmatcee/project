<script setup>
import Navbar from './components/nav/Navbar.vue'
</script>

<!-- src/App.vue -->
<template>
  <Navbar/>
 <main class="font-[rubik] grid lg:py-5 place-items-center">
  <router-view>  
  </router-view>
 </main>

 
  
</template>
<style scoped>

</style>
