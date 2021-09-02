<template>
  <div id="app">
    <Header />
    <HeaderOptions />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import HeaderOptions from "@/components/header/HeaderOptions";
import Footer from "@/components/footer/Footer";

export default {
  name: "AppMercadolibre",
  components: {
    Header,
    HeaderOptions,
    Footer,
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
</style>
