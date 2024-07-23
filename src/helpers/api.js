// src/helpers/api.js
import axiosClient from './axiosClient';

const apiProducts = {
  getProducts() {
    const url = '/products/';
    console.log('Getting products from:', url);
    return axiosClient.get(url);
  },

  getSingleProduct(id) {
    const url = `/products/${id}`;
    console.log('Getting single product from:', url);
    return axiosClient.get(url);
  },
};

export default apiProducts;
