<template>
<div class="container-fluid bg-dark">
  <LoadingAnimation :active="loading"></LoadingAnimation>
  <HomeNavbar></HomeNavbar>
    <carousel class="mb-3"></carousel>
    <HomeMarquee class="mb-3"></HomeMarquee>
      <GoodsArea></GoodsArea>
    </div>
</template>

<script>
import carousel from '../components/HomeCarousel'
import HomeNavbar from '../components/HomeNavbar'
import HomeMarquee from '../components/HomeMarquee'
import GoodsArea from '../components/GoodsArea'
import emitter from '@/methods/emitter'
export default {
  components: {
    carousel,
    HomeNavbar,
    HomeMarquee,
    GoodsArea
  },
  data () {
    return {
      loading: true
    }
  },
  provide () {
    return {
      emitter
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>
