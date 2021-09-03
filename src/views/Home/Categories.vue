<template>
    <div class="Categories-mercadolibre">
        <div class="Categories-mercadolibre__category">
            <img src="@/assets/images/categorias-destacadas-moda-infantil.png" width="100%" height="auto" alt="Kids fashion category" />
            <span class="category-mercadolibre-left-caption">MODA INFANTIL</span>
        </div>
        <div class="Categories-mercadolibre__category">
            <img src="@/assets/images/categorias-destacadas-proteccion.png" width="100%" height="auto" alt="Protection category"/>
            <span class="category-mercadolibre-right-caption">PROTECCIÓN</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoriesMercadolibre"
}
</script>

<style lang="scss">
%category-caption {
    font-family: "sans-serif";
    position: absolute;
    top: 65%;
    color: $color-white;
    font-size: 50px;
    font-weight: bolder;
    text-shadow: 2px 2px 2px #2C394B;
}

.Categories-mercadolibre {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    &__category {
        width: 50%;
        height: auto;
        padding: 5%;
        position: relative;

        .category-mercadolibre-left-caption {
            @extend %category-caption ;
            left: 25%;
        }

        .category-mercadolibre-right-caption {
            @extend %category-caption ;
            right: 25%;
        }
    }
}

@media (max-width: 1400px) {
    .category-mercadolibre-left-caption {
        font-size: 40px !important;
        left: 20% !important;
    }

    .category-mercadolibre-right-caption {
        font-size: 40px !important;
    }
}

@media (max-width: 1000px) {

    .category-mercadolibre-left-caption {
        font-size: 30px !important;
    }

    .category-mercadolibre-right-caption {
        font-size: 30px !important;
    }
}

@media (max-width: 750px) {

    .Categories-mercadolibre {
        flex-direction: column;

        &__category {
            width: 100%;
            height: auto;
            padding: 5%;

            .category-mercadolibre-left-caption {
                font-size: 30px !important;
                left: 25%;
            }

            .category-mercadolibre-right-caption {
                font-size: 30px !important;
                right: 25%;
            }
        }
    }
}

@media (max-width: 400px) { 

    .category-mercadolibre-left-caption {
        left: 20% !important;
    }

    .category-mercadolibre-right-caption {
        right: 20% !important;
    }
}
</style>
