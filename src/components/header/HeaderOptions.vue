<template>
  <div class="header-options-mercadolibre">
    <div
      class="header-options-mercadolibre__option"
      v-for="(option, index) in options"
      :key="index"
      :class="{ 'border-right': setBorder(index) }"
    >
      {{ option }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderOptionsMercadolibre",
  data() {
    return {
      options: ["Hombre", "Mujer", "Junior", "Niños", "Accesorios", "Ofertas"],
    };
  },
  methods: {
    setBorder(index) {
      if (index + 1 != this.options.length) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.header-options-mercadolibre {
  width: 100%;
  background-color: $color-black;
  color: $color-white;
  padding: 15px 50px;
  @include flex-full-center;

  &__option {
    padding: 0px 20px;
    font-size: 25px;
    cursor: pointer;
  }

  .border-right {
    border-right: 1px solid $color-white;
  }
}
</style>
