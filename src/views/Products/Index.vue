<template>
  <div class="products-mercadolibre">
    <CardProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct";
import { mapState } from "vuex";

export default {
  name: "ProductsMercadolibre",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: null,
    };
  },
  computed: {
    ...mapState({
      productsFilter: (state) => state.products.productsFilter,
    }),
  },
  watch: {
    productsFilter() {
      if (this.productsFilter != null && this.productsFilter.length > 0) {
        this.products = this.productsFilter;
      } else {
        this.products = [];
      }
    },
  },
};
</script>

<style lang="scss">
.products-mercadolibre {
  width: 100%;
  @include flex-full-center;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
