<template>
  <!-- <router-view/> -->
  <div class="container-fluid bg-dark">
  <LoadingAnimation :active="loading"></LoadingAnimation>
  <HomeNavbar></HomeNavbar>
    <carousel class="mb-3"></carousel>
    <HomeMarquee></HomeMarquee>
    </div>
</template>

<style lang="scss">
@import "./assets/all.scss"
</style>

<script>
import carousel from './components/HomeCarousel'
import HomeNavbar from './components/HomeNavbar'
import HomeMarquee from './components/HomeMarquee'
export default {
  components: {
    carousel,
    HomeNavbar,
    HomeMarquee
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>
