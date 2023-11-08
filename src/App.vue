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
    AppFooter

  },
  data() {
    return {
      store: store, // Assegna il tuo oggetto "store" alla proprietà "store" dei dati
    }
  },

  created() {
    axios.get('http://localhost:3000/products')
      .then(res => {
        // Aggiorna l'array "store.items" con i dati ottenuti dalla richiesta
        this.store.items = res.data
      })

  }
}
</script>

<template>
  <AppNav />


  <div class="container">
    <div class="row">
      <div class="card" v-for="element in store.items">
        <AppMainContent :card="element" />
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss';
</style>
