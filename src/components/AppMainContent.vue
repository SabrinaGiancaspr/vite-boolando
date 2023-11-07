<script>

export default {

    data() {
        return {
            
        };
    },
    props: {
        card: Object
    },
    methods: {
        calcDiscount(price, discount) {
            const priceNumber = parseFloat(price);
            const discountNumber = parseFloat(discount);
            if (discountNumber === 0) {
                return priceNumber;
            }
            const totalDiscount = (priceNumber * discountNumber) / 100;
            const finalPrice = priceNumber - totalDiscount;

            return finalPrice.toFixed(2);
        },

    },

};
</script>

<template>
    
    <span class="heart"> &hearts;</span>
    <img class="first-img" :src="card.frontImage" alt="" />
    <img class="img-none" :src="card.backImage" alt="" />
    <div class="tag-container">
        <span :class="badge.type" v-for="badge in card.badges" >{{ badge.value }}</span> 
    </div>

    <p class="brand">{{ card.brand }}</p>
    <p class="description">{{ card.name}}</p>
    <div class="price-container">
        <p class="discount-price">
            {{ calcDiscount(card.price, card.discount) }} &euro;
        </p>
        <p class="price" v-show="card.discount != 0">
            {{ card.price }} &euro;
        </p>
    </div>


</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;





    .heart {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 30px;
        background-color: white;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;

        &:hover {
            color: red;
        }
    }

    .img-none {
        display: none;
    }

    .tag-container {
        display: flex;
        gap: 10px;
        position: absolute;
        bottom: 100px;
        color: white;

        .discount {
            order: -1;
            background-color: red;
            padding: 5px;
        }

        .tag {
            background-color: green;
            padding: 5px;
        }

        .prova {
            background-color: blue;
            padding: 5px;
        }
    }

    .description {
        font-weight: 600;
    }

    .price-container {
        display: flex;
        gap: 10px;

        .price {
            text-decoration: line-through;
        }

        .discount-price {
            color: red;
            font-weight: bold;
        }
    }
</style>
