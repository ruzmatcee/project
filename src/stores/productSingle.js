import { defineStore } from 'pinia';
import apiProducts from '../helpers/api';

export const useProductSingleStore = defineStore('singleProduct', {
  state: () => ({
    product: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProduct(id) {
      try {
        this.loading = true;
        const product = await apiProducts.getSingleProduct(id);
        this.product = product;
        this.error = null;
      } catch (error) {
        this.error = error.message || 'Failed to fetch product';
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true,
});
