import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: null,
    productsFilter: null,
  },
  mutations: {
    setProducts(state, newProducts) {
      state.products = newProducts;
    },
    setProductsFilter(state, newProductsFilter) {
      state.productsFilter = newProductsFilter;
    },
    clearProductsFilter(state) {
      state.productsFilter = null;
    },
  },
  actions: {
    async getProducts({ commit }, categoriId) {
      try {
        let response = await axios.get(
          `https://api.mercadolibre.com/sites/MCO/search?category=${categoriId}`
        );
        if (response.status == 200) {
          commit("setProducts", response.data.results);
        }
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
    async searchProducts({ commit }, name) {
      try {
        let response = await axios.get(
          `https://api.mercadolibre.com/sites/MCO/search?q=${name}`
        );
        if (response.status == 200) {
          commit("setProductsFilter", response.data.results);
        }
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  },
};
