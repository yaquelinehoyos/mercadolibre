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
    footerPolicies: [
      "Políticas de privacidad",
      "Políticas de cambio",
      "Políticas de envío",
      "Términos y condiciones",
      "Responsabilidad social",
    ],
    footerAboutUs: [
      "Encuentra tu tienda",
      "Contáctanos",
      "Trabaja con nosotros",
    ],
  },
  getters: {
    headerOptions(state) {
      return state.headerOptions;
    },
    footerPolicies(state) {
      return state.footerPolicies;
    },
    footerAboutUs(state) {
      return state.footerAboutUs;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
