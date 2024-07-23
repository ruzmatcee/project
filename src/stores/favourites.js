import { defineStore } from 'pinia';

export const useFavouriteStore = defineStore('favourite', {
  state: () => ({
    favourites: [],
    favIds: [],
    activeStates: {},
  }),
  actions: {
    getAddFavPro(product) {
      const favIdIndex = this.favIds?.findIndex(item => item == product.id);
      const indexInFavourites = this.favourites.findIndex(item => item.id === product.id);

      if (indexInFavourites !== -1) {
        this.favourites.splice(indexInFavourites, 1);
        this.favIds.splice(favIdIndex, 1);
        this.setActiveState(product.id, false);
      } else {
        this.favIds.push(product.id);
        this.favourites.push(product);
        this.setActiveState(product.id, true);
      }
    },

    removeFavProduct(id) {
      const indexToRemove = this.favourites.findIndex(item => item.id === id);
      if (indexToRemove !== -1) {
        this.favourites.splice(indexToRemove, 1);
        this.setActiveState(id, false);
      }
    },

    setActiveState(id, isActive) {
      this.activeStates = { ...this.activeStates, [id]: isActive };
    },
  },
  persist: true,
});
