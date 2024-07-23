// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/HomeView.vue';
import ProductItem from '../components/ProductItem.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
    path: '/', 
    name: 'ProductList',
    component: ProductList },
    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('../views/FavouriteView.vue') 
    },
    {
      path: '/cetegory',
      name: 'cetegory',
      component: () => import('../views/FavouriteView.vue') 
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/FavouriteView.vue') 
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/FavouriteView.vue') 
    },
    {
    path: '/product/:id',
    name: 'ProductItem',
    component: ProductItem
    },
   
  ]
});

export default router;
