<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: "/1.webp",
                    description: "RELAXED FIT TEE UNISEX",
                    price: "29.99",
                    discount: "50",
                    brand: "Levi's",
                    tag: "Sostenibilità",
                    imgNone: "/1b.webp"
                },
                {
                    img: "/2.webp",
                    description: "ROSES TEE",
                    price: "29.99",
                    discount: "30",
                    brand: "Guess",
                    tag: "",
                    imgNone: "/2b.webp"
                },
                {
                    img: "/3.webp",
                    description: "VOGLIA DI COLORI PASTELLO",
                    price: "184.99",
                    discount: "30",
                    brand: "Come Zucchero Filato",
                    tag: "",
                    imgNone: "/3b.webp"
                },
                {
                    img: "/4.webp",
                    description: "TEE UNISEX",
                    price: "29.99",
                    discount: "50",
                    brand: "Levi's",
                    tag: "Sostenibilità",
                    imgNone: "/4b.webp"
                },
                {
                    img: "/5.webp",
                    description: "STRIPE BODICE",
                    price: "99.99",
                    discount: "0",
                    brand: "Maya Deluxe",
                    tag: "",
                    imgNone: "/5b.webp"
                },
                {
                    img: "/6.webp",
                    description: "MAGLIONE - BLACK",
                    price: "29.99",
                    discount: "0",
                    brand: "Espirit",
                    tag: "Sostenibilità",
                    imgNone: "/6b.webp"
                }

            ]
        }
    },
    methods: {
        calcDiscount(price, discount) {
            
            const priceNumber = parseFloat(price);
            const discountNumber = parseFloat(discount);
            if (discountNumber === 0 ) {
                return priceNumber;
            }
            const totalDiscount = (priceNumber * discountNumber) / 100;
            const finalPrice = priceNumber - totalDiscount;
            
            return finalPrice.toFixed(2);
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="card in cards" class="card">
                <img class="first-img" :src="card.img" alt="">
                <img class="img-none" :src="card.imgNone" alt="">
                <div class="tag-container">
                    <span class="discount" v-show="card.discount != 0">-{{ card.discount }}%</span>
                    <span class="tag" v-show="card.tag !=''">{{ card.tag }}</span>
                </div>

                <p class="brand">{{ card.brand }}</p>
                <p class="description">{{ card.description }}</p>
                <div class="price-container">
                    <p class="discount-price">{{ calcDiscount(card.price, card.discount) }} &euro;</p>
                    <p class="price" v-show=" card.discount !=0">{{ card.price }} &euro;</p>

                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;

.card {
    flex-basis: calc(100% / 12 * 4);
    position: relative;
    margin-top: 50px;
    cursor: pointer;
    padding: 0 10px;
    &:hover{
       .img-none{
        display: block;
       }

       .first-img{
        display: none;
       }

    }
    .img-none{
        display: none;
    }
    .tag-container{
        display: flex;
        gap: 10px;
        position: absolute;
        bottom: 100px ;
        color: white;

        .discount{
            background-color: red;
            padding: 5px;
        }

        .tag{
            background-color: green;
            padding: 5px;
        }
        
    }
    .description{
            font-weight: 600;
        }

    .price-container{
        display: flex;
        gap: 10px;


        .price{
            text-decoration: line-through;
        }
        .discount-price{
            color: red;
            font-weight: bold;
        }
    }
}
</style>
