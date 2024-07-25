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
      component: ProductList 
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('../views/FavouriteView.vue') 
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue') 
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue') 
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue') 
    },
    {
      path: '/product/:id',
      name: 'ProductItem',
      component: ProductItem
    }
  ]
});

export default router;
