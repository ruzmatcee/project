// src/stores/product.js
import { defineStore } from 'pinia';
import apiProducts from '../helpers/api';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      try {
        this.loading = true;
        const products = await apiProducts.getProducts();
        this.products = products;
        this.error = null;
      } catch (error) {
        this.error = error.message || 'Failed to fetch products';
      } finally {
        this.loading = false;
      }
    },

  },

  persist: true,
});
