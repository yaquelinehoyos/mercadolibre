<template>
  <div id="app" class="app-mercadolibre">
    <Header class="app-mercadolibre__header" />
    <HeaderOptions class="app-mercadolibre__header-options" />

    <HeaderMovile class="app-mercadolibre__header-movile" />
    <router-view />
    <Footer class="app-mercadolibre__footer" />

    <FooterMovile class="app-mercadolibre__footer-movile" />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import HeaderOptions from "@/components/header/HeaderOptions";
import HeaderMovile from "@/components/header/HeaderMovile";
import Footer from "@/components/footer/Footer";
import FooterMovile from "@/components/footer/FooterMovile";
import { mapState } from "vuex";

export default {
  name: "AppMercadolibre",
  components: {
    Header,
    HeaderOptions,
    HeaderMovile,
    Footer,
    FooterMovile,
  },
  computed: {
    ...mapState({
      productsFilter: (state) => state.products.productsFilter,
    }),
  },
  watch: {
    productsFilter() {
      if (this.productsFilter != null) {
        this.$router.push({ name: "Products" }).catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            // logError(err);
          }
        });
      } else {
        this.$router.push({ name: "Home" }).catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            // logError(err);
          }
        });
      }
    },
  },
  async created() {
    //this.$store.dispatch("oauth/getToken");
    let categories = await this.$store.dispatch("categories/getCategories");
    let clotheAndAccessories = categories.find(
      (category) => category.name == "Ropa y Accesorios"
    );
    this.$store.dispatch("products/getProducts", clotheAndAccessories.id);
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-black;
}

.app-mercadolibre {
  margin: 0;

  &__header-movile {
    display: none;
  }

  &__footer-movile {
    display: none;
  }
}

@media (max-width: 750px) {
  .app-mercadolibre {
    &__header {
      display: none;
    }

    &__header-options {
      display: none;
    }

    &__footer {
      display: none;
    }

    &__header-movile {
      display: block;
    }

    &__footer-movile {
      display: block;
    }
  }
}
</style>
