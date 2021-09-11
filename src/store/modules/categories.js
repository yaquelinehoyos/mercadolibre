import axios from "axios";

export default {
  namespaced: true,
  state: {
    categories: null,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async getCategories({ commit }) {
      try {
        let response = await axios.get(
          "https://api.mercadolibre.com/sites/MCO/categories"
        );
        if (response.status == 200) {
          commit("setCategories", response.data);
        }
        return response.data;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  },
};
