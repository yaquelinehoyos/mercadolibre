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
          <img
            src="../../assets/icons/icon-search.svg"
            alt="search"
            width="20px"
            height="20px"
          />
        </button>
      </div>
      <div class="right-options">
        <button class="right-options__button">
          <img
            src="../../assets/icons/icon-cart.svg"
            alt="search"
            width="25px"
            height="25px"
          />
          <span class="badge-mercadolibre">2</span>
        </button>
        <button class="right-options__button">
          <img
            src="../../assets/icons/icon-user.svg"
            alt="search"
            width="25px"
            height="28px"
          />
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
    flex-direction: row;
  }

  &__options {
    width: 70%;
    @extend %flex-row;
    justify-content: space-between;

    .searcher-mercadolibre {
      width: 60%;
      @include searcher-header;
    }

    .right-options {
      width: 40%;
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

@media (max-width: 1050px) {
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
    }
  }
}
</style>
