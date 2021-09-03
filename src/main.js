import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

// Bootstrapvue
import "./plugins/bootstrapVue";

// Fontawesome
import "./plugins/fontawesome";

Vue.config.productionTip = false;
Vue.use(axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
