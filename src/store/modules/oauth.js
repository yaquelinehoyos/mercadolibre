import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async getToken({ commit }) {
      let body = {
        grant_type: "authorization_code",
        client_id: "1934841065712689",
        client_secret: "jQHV4YvILOsScMs3eU8P0hjaIoHT63BL",
        code: "TG-613be3ceb2383c000c54d7ed-604701824",
        redirect_uri:
          "https://613a8be2a6d9ee37fd82a604--heuristic-liskov-5efd39.netlify.app/",
      };
      try {
        let response = await axios.post(
          "https://api.mercadolibre.com/oauth/token",
          body,
          {
            headers: {
              accept: "application/json",
              "content-type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.status == 200) {
          commit("setToken", response.data.access_token);
          localStorage.setItem(
            "mercadolibre-token",
            response.data.access_token
          );
        }
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  },
};
