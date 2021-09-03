<template>
  <div class="homepage-mercadolibre">
    <MainBanner />
    <Categories />
    <PopularProducts />
  </div>
</template>

<script>
import MainBanner from "./MainBanner.vue";
import Categories from "./Categories.vue";
import PopularProducts from "./PopularProducts.vue";

export default {
  name: "HomepageMercadolibre",
  components: {
    MainBanner,
    Categories,
    PopularProducts,
  },
};
</script>
