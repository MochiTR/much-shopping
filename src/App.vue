<template>
  <!-- <router-view/> -->
  <HomeNavbar></HomeNavbar>
    <carousel></carousel>

</template>

<style lang="scss">
@import "./assets/all.scss"
</style>

<script>
import carousel from './components/HomeCarousel'
import HomeNavbar from './components/HomeNavbar'
export default {
  components: {
    carousel,
    HomeNavbar
  }
}
</script>
