<template>
  <div class="main-banner-mercadolibre">
    <img
      src="@/assets/images/banner-principal-desktop.png"
      alt="Main banner homepage"
      width="100%"
      height="auto"
    />
    <div class="arrow-banner">
      <img
        class="arrow-banner__button-left"
        src="@/assets/icons/left-light-arrow.svg"
        alt="Left arrow in banner"
      />
    </div>
    <div class="arrow-banner">
      <img
        class="arrow-banner__button-right"
        src="@/assets/icons/right-light-arrow.svg"
        alt="right arrow in banner"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBannerMercadolibre",
};
</script>

<style lang="scss">
%arrow-button {
  padding: 20px;
  position: absolute;
  top: 40%;
  background-color: rgba(96, 96, 96, 0.2);
  cursor: pointer;
}

.main-banner-mercadolibre {
  position: relative;
  text-align: center;

  .arrow-banner {
    &__button-left {
      @extend %arrow-button;
      left: 30px;
      width: 90px;
      height: auto;
    }

    &__button-right {
      @extend %arrow-button;
      right: 30px;
      width: 90px;
      height: auto;
    }
  }
}

@media (max-width: 1300px) {
  .arrow-banner {
    &__button-left {
      width: 70px !important;
      height: auto;
    }

    &__button-right {
      width: 70px !important;
      height: auto;
    }
  }
}

@media (max-width: 800px) {
  .arrow-banner {
    &__button-left {
      width: 50px !important;
      height: auto;
    }

    &__button-right {
      width: 50px !important;
      height: auto;
    }
  }
}
</style>
