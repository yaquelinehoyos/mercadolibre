import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
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
  },
};
