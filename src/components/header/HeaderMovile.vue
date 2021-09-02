<template>
  <div class="header-movile-mercadolibre shadow-sm">
    <div class="header-movile-mercadolibre__top">
      <SidebarMovile />
      <h1 class="header-movile-mercadolibre-title">
        <strong>CLOTHESSTORE</strong>
      </h1>
      <div class="right-options">
        <button class="right-options__button">
          <i class="fas fa-shopping-cart fa-lg"></i
          ><span class="badge-mercadolibre">2</span>
        </button>
      </div>
    </div>
    <div class="searcher-mercadolibre">
      <input
        class="searcher-mercadolibre__input"
        type="text"
        placeholder="Buscar aquí producto"
      />
      <button class="searcher-mercadolibre__button">
        <i class="fas fa-search fa-lg"></i>
      </button>
    </div>
  </div>
</template>

<script>
import SidebarMovile from "./SidebarMovile.vue";

export default {
  name: "HeaderMovileMercadolibre",
  components: {
    SidebarMovile,
  },
};
</script>

<style lang="scss">
.header-movile-mercadolibre {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  &__top {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-around;
  }

  .header-movile-mercadolibre-title {
    margin: 0;
    display: flex;
    align-items: center;
  }

  .searcher-mercadolibre {
    width: 100%;
    @include searcher-header;
  }

  .right-options {
    &__button {
      @include header-button;
    }
  }
}
</style>
