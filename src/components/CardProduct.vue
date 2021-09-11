<template>
  <div class="card-product-mercadolibre">
    <!-- <span class="card-product-mercadolibre__discount-bage">- 50%</span> -->
    <img
      :src="product.thumbnail"
      :alt="product.name"
      class="card-product-mercadolibre__image"
    />
    <div class="card-product-mercadolibre__info">
      <h5 class="card-product-mercadolibre__title">
        <strong>{{ product.title }}</strong>
      </h5>
      <div class="product-price">
        <h4 class="product-price__actual">
          <strong>$ {{ product.price }}</strong>
        </h4>
      </div>
      <button class="add-cart-button">
        <i class="fas fa-shopping-cart"></i> Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card-product-mercadolibre {
  width: 300px;
  min-width: 300px;
  margin: 20px;
  border: 1px solid #e6e6e6;
  background-color: #f4f4f4;
  position: relative;

  &__discount-bage {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px 15px;
    background-color: $color-badge;
    color: $color-white;
    font-family: "sans-serif";
    font-weight: bold;
  }

  &__image {
    width: 300px;
    height: auto;
    object-fit: cover;
  }

  &__info {
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .product-price {
      margin: 20px 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-family: "sans-serif";

      &__actual {
        color: $color-badge;
        font-weight: bold;
      }

      &__old {
        color: #c8c6c6;
        text-decoration: line-through;
      }
    }

    .add-cart-button {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
      background-color: $color-black;
      color: $color-white;
    }
  }

  &__title {
    height: 80px;
  }
}
</style>
