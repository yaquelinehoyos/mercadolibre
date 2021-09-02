<template>
  <div class="footer-mercadolibre">
    <div class="footer-mercadolibre__container">
      <div class="footer-mercadolibre__column">
        <h3 class="options-title"><strong>POLÍTICAS</strong></h3>
        <span
          class="options-title__option"
          v-for="policy in policies"
          :key="policy"
          >{{ policy }}</span
        >
      </div>
      <div class="footer-mercadolibre__column">
        <h3 class="options-title"><strong>SOBRE NOSOTROS</strong></h3>
        <span
          class="options-title__option"
          v-for="item in aboutUs"
          :key="item"
          >{{ item }}</span
        >
      </div>
      <div class="footer-mercadolibre__column">
        <h3 class="options-title"><strong>SÍGUENOS EN:</strong></h3>
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
    </div>
    <hr />
    <p>&#169; Copyright Colombia. Todos los derechos reservados</p>
  </div>
</template>

<script>
export default {
  name: "FooterMercadolibre",
  data() {
    return {
      policies: [
        "Políticas de privacidad",
        "Políticas de cambio",
        "Políticas de envío",
        "Términos y condiciones",
        "Responsabilidad social",
      ],
      aboutUs: ["Encuentra tu tienda", "Contáctanos", "Trabaja con nosotros"],
    };
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
%flex-column {
  display: flex;
  flex-direction: column;
}

.footer-mercadolibre {
  background-color: $color-black;
  color: $color-white;
  padding: 70px 20px 10px 20px;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  &__column {
    @extend %flex-column;
    text-align: left;

    .options-title {
      margin-bottom: 20px;

      &__option {
        padding: 5px 0px;
        font-size: 19px;
      }
    }

    .social-media {
      &__button {
        outline: none;
        height: 50px;
        width: 50px;
        border: none;
        background-color: $color-white;
        color: $color-black;
        border-radius: 50%;
      }

      .margin-left {
        margin-left: 15px;
      }
    }
  }
}

@media (max-width: 850px) {
  h3 {
    font-size: 1.2rem !important;
  }

  .options-title__option {
    font-size: 15px !important;
  }
}
</style>
