<script>
import AppNav from './components/AppNav.vue';
import AppMainContent from './components/AppMainContent.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
    AppNav,
    AppMainContent,
    AppFooter
},
  data() {
    return {
      title: 'Boolando',
    }
  }
}
</script>

<template>
<AppNav />
<AppMainContent />
<AppFooter />

</template>

<style lang="scss">
@use './style/general.scss';


</style>
