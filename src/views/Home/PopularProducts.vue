<template>
  <div class="popular-products-mercadolibre">
    <h1><strong>PRODUCTOS MÁS BUSCADOS</strong></h1>
    <div class="popular-products-mercadolibre__container">
      <img
        src="../../assets/icons/left-dark-arrow.svg"
        alt="Left arrow popular products"
        class="popular-products-arrow"
        @click="scrollCards('left')"
      />
      <div class="popular-products-cards" id="popular-products-cards">
        <CardProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <img
        src="../../assets/icons/right-dark-arrow.svg"
        alt="Left arrow popular products"
        class="popular-products-arrow"
        @click="scrollCards('right')"
      />
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct";
import { mapState } from "vuex";

export default {
  name: "PopularProductsMercadolibre",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState({
      productsFromVuex: (state) => state.products.products,
    }),
  },
  watch: {
    productsFromVuex() {
      this.products = this.productsFromVuex;
    },
  },
  methods: {
    scrollCards(direction) {
      let element = document.getElementById("popular-products-cards");
      let scrollAmount = 0;
      let slideTimer = setInterval(function () {
        if (direction == "left") {
          element.scrollLeft -= 300;
        } else {
          element.scrollLeft += 300;
        }
        scrollAmount += 300;
        if (scrollAmount >= 100) {
          window.clearInterval(slideTimer);
        }
      }, 25);
    },
  },
};
</script>

<style lang="scss">
.popular-products-mercadolibre {
  padding: 0% 5% 5% 5%;

  &__container {
    width: 100%;
    @include flex-full-center;
    flex-direction: row;
    margin-top: 50px;

    .popular-products-arrow {
      cursor: pointer;
      margin: 0px 10px;
    }

    .popular-products-cards {
      width: 100%;
      @include flex-full-center;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      overflow: hidden;
    }
  }
}
</style>
