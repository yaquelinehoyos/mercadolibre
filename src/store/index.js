import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerOptions: [
      "Hombre",
      "Mujer",
      "Junior",
      "Niños",
      "Accesorios",
      "Ofertas",
    ],
  },
  getters: {
    headerOptions(state) {
      return state.headerOptions;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
