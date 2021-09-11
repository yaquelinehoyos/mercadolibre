import axios from "axios";

export default function setup() {
  axios.interceptors.request.use(
    function (config) {
      let token = localStorage.getItem("mercadolibre-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
}
