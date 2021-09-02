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

%div-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

%icon-button {
  padding: 10px 20px;
  border: none;
  outline: none;
}

.header-mercadolibre {
  background-color: $color-white;
  width: 100%;
  padding: 30px 50px;
  @extend %flex-row;

  &__title {
    width: 30%;
  }

  &__options {
    width: 70%;
    @extend %flex-row;
    justify-content: space-between;

    .searcher-mercadolibre {
      width: 70%;
      @extend %div-center;

      &__input {
        width: 70%;
        padding: 10px 20px;
        border: none;
        outline: none;
        background-color: $color-light-gray;
      }

      &__button {
        @extend %icon-button;
        background-color: $color-dark-gray;

        &:hover {
          background-color: darken($color-dark-gray, 5%);
        }
      }
    }

    .right-options {
      width: 30%;
      @extend %div-center;

      &__button {
        position: relative;
        @extend %icon-button;
        background-color: $color-white;

        &:hover {
          background-color: darken($color-light-gray, 5%);
        }

        &:active {
          transform: scale(0.96);
          .badge-mercadolibre {
            transform: scale(1.2);
          }
        }

        .badge-mercadolibre {
          height: 20px;
          width: 20px;
          padding: 5px;
          border-radius: 50%;
          background-color: $color-badge;
          color: $color-white;
          font-size: 8px;
          position: absolute;
          top: 2px;
          right: 10px;
        }
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
</style>
