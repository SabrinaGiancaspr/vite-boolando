<script>
import AppNav from './components/AppNav.vue';
import AppMainContent from './components/AppMainContent.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';  // Importa il tuo oggetto "store" reattivo
import axios from 'axios';
export default {

  components: {
    AppNav,
    AppMainContent,
    AppFooter,

  },

  data() {
    return {
      store: store, // Assegna il tuo oggetto "store" alla proprietà "store" dei dati
      open: false,
      currentCard: {},
      currentDiscountPrice: '',
    }
  },

  created() {
    axios.get('http://localhost:3000/products')
      .then(res => {
        // Aggiorna l'array "store.items" con i dati ottenuti dalla richiesta
        this.store.items = res.data
      })

  },
  methods: {
    heartItem(i) {
      this.store.items[i].isInFavorites = !this.store.items[i].isInFavorites
    },

    showModal(card, discountedPrice) {
      this.open = true;
      this.currentCard = card;
      this.currentDiscountPrice = discountedPrice
    },

    closeModal() {
      this.open = false;
    }
  }
}
</script>

<template>
  <AppNav />

  <div class="container">
    <div class="row">
      <div class="card" v-for=" (element, i) in store.items">
        <AppMainContent @modal="showModal" @heart="heartItem(i)" :card="element" />
      </div>
    </div>
  </div>
  <AppFooter />
  <div class="modal" v-show="open === true">
    <div class="content">
      <ul>
        <li>Brand:{{ currentCard.brand }}</li>
        <li>Name:{{ currentCard.name }}</li>
        <li>Price:{{ currentCard.price }} &euro;</li>
        <li>Discount Price:{{ currentDiscountPrice }}&euro;</li>
        <li v-for="item in currentCard.badges">{{ item.type }} : {{ item.value }}</li>
      </ul>
      <font-awesome-icon @click="closeModal()" icon="fa-solid fa-circle-xmark" />
    </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';

.modal {
  &::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: space-between;

    .fa-circle-xmark {
      cursor: pointer;
    }
  }
}
</style>
