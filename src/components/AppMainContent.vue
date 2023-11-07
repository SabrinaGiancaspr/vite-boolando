<script>
export default {
  data() {
    return {};
  },
  props: {
    card: Object,
  },
  methods: {
    heartFunction() {
      this.card.isInFavorites = !this.card.isInFavorites;
    },

    discountCalc() {
      for (let i = 0; i < this.card.badges.length; i++) {
        if (this.card.badges[i].type === "discount") {
          const discountValue = parseFloat(this.card.badges[i].value);
          const finalPrice = (
            (this.card.price * (100 + discountValue)) /
            100
          ).toFixed(2);

          return finalPrice;
        }
      }
      return this.card.price;
    },
  },
};
</script>

<template>
  <span
    class="heart"
    @click="heartFunction()"
    :class="card.isInFavorites === true ? 'red-heart' : ' '"
  >
    &hearts;</span
  >
  <img class="first-img" :src="card.frontImage" alt="" />
  <img class="img-none" :src="card.backImage" alt="" />
  <div class="tag-container">
    <span :class="badge.type" v-for="badge in card.badges">{{
      badge.value
    }}</span>
  </div>

  <p class="brand">{{ card.brand }}</p>
  <p class="description">{{ card.name.toUpperCase() }}</p>
  <div class="price-container">
    <p class="discount-price">{{ discountCalc() }} &euro;</p>
    <p class="price" v-show="card.price != discountCalc()">{{ card.price }} &euro;</p>
    
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
}

.red-heart {
  color: red;
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
