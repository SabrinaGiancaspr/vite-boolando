<script>
import AppNav from './components/AppNav.vue';
import AppMainContent from './components/AppMainContent.vue';
export default {
    components: {
    AppNav,
    AppMainContent
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

</template>

<style lang="scss">
@use './style/general.scss';


</style>
