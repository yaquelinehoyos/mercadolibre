<template>
  <div class="footer-movile-mercadolibre">
    <div class="footer-movile-options">
      <h4><strong>POLÍTICAS</strong></h4>
      <button
        class="footer-movile-options__plus-button"
        @click="showPolicies = !showPolicies"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div v-if="showPolicies" class="footer-movile-collapse">
      <p
        class="footer-movile-collapse__option"
        v-for="policy in policies"
        :key="policy"
      >
        {{ policy }}
      </p>
    </div>
    <hr />
    <div class="footer-movile-options">
      <h4><strong>SOBRE NOSOTROS</strong></h4>
      <button
        class="footer-movile-options__plus-button"
        @click="showAboutUs = !showAboutUs"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div v-if="showAboutUs" class="footer-movile-collapse">
      <p
        class="footer-movile-collapse__option"
        v-for="item in aboutUs"
        :key="item"
      >
        {{ item }}
      </p>
    </div>
    <hr />
    <h4><strong>SÍGUENOS EN:</strong></h4>
    <div class="social-media">
      <button
        class="social-media__button"
        :class="{ 'margin-left': setMargin(0) }"
      >
        <i class="fab fa-facebook-f fa-2x"></i>
      </button>
      <button
        class="social-media__button"
        :class="{ 'margin-left': setMargin(1) }"
      >
        <i class="fab fa-twitter fa-2x"></i>
      </button>
      <button
        class="social-media__button"
        :class="{ 'margin-left': setMargin(2) }"
      >
        <i class="fab fa-instagram fa-2x"></i>
      </button>
      <button
        class="social-media__button"
        :class="{ 'margin-left': setMargin(3) }"
      >
        <i class="fab fa-youtube fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMovileMercadolibre",
  data() {
    return {
      policies: null,
      aboutUs: null,
      showPolicies: false,
      showAboutUs: false,
    };
  },
  created() {
    this.policies = this.$store.getters["footerPolicies"];
    this.aboutUs = this.$store.getters["footerAboutUs"];
  },
  methods: {
    setMargin(index) {
      if (index != 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.footer-movile-mercadolibre {
  background-color: $color-black;
  color: $color-white;
  padding: 50px 20px;
  text-align: left;

  .footer-movile-options {
    display: flex;
    justify-content: space-between;

    &__plus-button {
      border: none;
      outline: none;
      background-color: $color-black;
      color: $color-white;
    }
  }

  .footer-movile-collapse {
    margin-top: 25px;
    text-align: left;
    color: $color-white;
  }

  .social-media {
    margin-top: 25px;
    @include footer-social-media;
  }
}
</style>
