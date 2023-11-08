<script>
import AppNav from './components/AppNav.vue';
import AppMainContent from './components/AppMainContent.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store';
import axios from 'axios';
export default {
    components: {
    AppNav,
    AppMainContent,
    AppFooter

},
  data() {
    return {
      store: store
    }
  },
  
  created(){
    axios.get('http://localhost:3000/products')
    .then(res => {
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
            <AppMainContent :card="element"/>
          </div>
        </div>
</div>
<AppFooter />
</template>

<style lang="scss">
@use './style/general.scss';


</style>
