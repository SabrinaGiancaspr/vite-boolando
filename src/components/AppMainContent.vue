<script>
export default {
  emits: ['heart', 'modal'],
  data() {
    return {};
  },
  props: {
    card: Object, //riceve un oggetto "card" come prop
  },
  methods: {
    // Metodo per gestire il click sul cuore per aggiungere/rimuovere dai preferiti
    heartFunction() {
      this.$emit('heart')
    },
    openModal(){
      this.$emit('modal', this.card)
      // console.log(this.card)
    }

  },
  computed: {
        // Metodo per calcolare il prezzo scontato, se presente, sulla carta
    discountedPrice () {
      for (let i = 0; i < this.card.badges.length; i++) {
        if (this.card.badges[i].type === "discount") {
          const discountValue = parseFloat(this.card.badges[i].value);
          const finalPrice = (
            (this.card.price * (100 + discountValue)) /
            100
          ).toFixed(2); // Calcola il prezzo scontato due decimali
  
          return finalPrice;
        }
      }
      return this.card.price;// Se non ci sono sconti, restituisce il prezzo normale
    }
  }
}
</script>

<template>
  <!-- Visualizza il cuore per aggiungere/rimuovere dai preferiti e gestisce il colore del cuore -->
  <span class="heart" @click="heartFunction()" :class="card.isInFavorites === true ? 'red-heart' : ' '">
    &hearts;</span>
  <!-- motrare img -->
  <img class="first-img" :src="card.frontImage" alt="" />
  <img class="img-none" :src="card.backImage" alt="" />
  <div class="tag-container">
    <span :class="badge.type" v-for="badge in card.badges">{{
      badge.value
    }}</span>
  </div>

  <p class="brand">{{ card.brand }}</p>
  <p class="description" @click="openModal()">{{ card.name.toUpperCase() }}</p>
  <div class="price-container">
    <!-- Visualizza il prezzo scontato, se presente -->
    <p class="discount-price">{{ discountedPrice }} &euro;</p>
    <!-- Visualizza il prezzo normale se è diverso dal prezzo scontato -->
    <p class="price" v-show="card.price != discountedPrice">{{ card.price }} &euro;</p>

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
