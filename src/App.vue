<script>
import AppNav from './components/AppNav.vue';
export default {
    components: {
    AppNav,
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


</template>

<style lang="scss">
@use './style/general.scss';


</style>
