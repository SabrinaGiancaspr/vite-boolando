<script>
import AppNav from './components/AppNav.vue';
import AppMainContent from './components/AppMainContent.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store';
export default {
    components: {
    AppNav,
    AppMainContent,
    AppFooter

},
  data() {
    return {
      cards: store.items
    }
  }
}
</script>

<template>

<AppNav />


<div class="container">
        <div class="row">
          <div class="card" v-for="element in cards.products">
            <AppMainContent :card="element"/>
          </div>
        </div>
</div>
<AppFooter />
</template>

<style lang="scss">
@use './style/general.scss';


</style>
