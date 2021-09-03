<template>
  <div class="sidebar-movile-mercadolibre">
    <button class="sidebar-movile-mercadolibre__toggle" v-b-toggle.sidebar-1>
      <i class="fas fa-bars fa-lg"></i>
    </button>
    <b-sidebar id="sidebar-1" shadow>
      <div class="sidebar-movile-options px-3 py-2">
        <span
          class="sidebar-movile-options__option"
          v-for="(option, index) in options"
          :key="index"
          >{{ option }}</span
        >
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SidebarMovileMercadolibre",
  data() {
    return {
      options: null,
    };
  },
  created() {
    this.options = this.$store.getters["headerOptions"];
  },
};
</script>

<style lang="scss">
.sidebar-movile-mercadolibre {
  &__toggle {
    @include header-button;
  }

  .sidebar-movile-options {
    display: flex;
    flex-direction: column;
    text-align: left;

    &__option {
      padding: 10px 20px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}

.bg-light {
  background-color: #ffffff !important;
}

.close {
  @include header-button;
  font-size: 50px !important;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
</style>
