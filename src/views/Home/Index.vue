<template>
  <div class="homepage-mercadolibre">
    <MainBanner />
    <Categories />
  </div>
</template>

<script>
import MainBanner from "./MainBanner.vue";
import Categories from "./Categories.vue";

export default {
  name: "HomepageMercadolibre",
  components: {
    MainBanner,
    Categories
  },
};
</script>
