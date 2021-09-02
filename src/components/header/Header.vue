<template>
  <div class="header-mercadolibre">
    <h1 class="header-mercadolibre__title"><strong>CLOTHESSTORE</strong></h1>
    <div class="header-mercadolibre__options">
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
      <div class="right-options">
        <button class="right-options__button">
          <i class="fas fa-shopping-cart fa-lg"></i
          ><span class="badge-mercadolibre">2</span>
        </button>
        <button class="right-options__button">
          <i class="fas fa-user fa-lg"></i>
        </button>
        <button class="right-options__session">Iniciar sesión</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMercadolibre",
};
</script>

<style lang="scss">
%flex-row {
  display: flex;
  flex-direction: row;
}

.header-mercadolibre {
  background-color: $color-white;
  width: 100%;
  padding: 30px 50px;
  @extend %flex-row;

  &__title {
    width: 30%;
    margin: 0;
    @include flex-full-center;
  }

  &__options {
    width: 70%;
    @extend %flex-row;
    justify-content: space-between;

    .searcher-mercadolibre {
      width: 70%;
      @include searcher-header;
    }

    .right-options {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      &__button {
        @include header-button;
      }

      &__session {
        margin-left: 5px;
        padding: 10px 20px;
        border: 1px solid $color-black;
        background-color: $color-white;

        &:hover {
          background-color: darken($color-light-gray, 5%);
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .header-mercadolibre {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;

    &__title {
      width: 100%;
      margin-bottom: 20px;
    }

    &__options {
      width: 100%;

      .searcher-mercadolibre {
        width: 60%;
      }

      .right-options {
        width: 40%;
      }
    }
  }
}
</style>
