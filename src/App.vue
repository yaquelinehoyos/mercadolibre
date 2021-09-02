<template>
  <div id="app">
    <Header />
    <HeaderOptions />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import HeaderOptions from "@/components/header/HeaderOptions";

export default {
  name: "AppMercadolibre",
  components: {
    Header,
    HeaderOptions,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: $color-black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
