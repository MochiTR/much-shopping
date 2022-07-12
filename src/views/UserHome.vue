<template>
<div class="container-fluid bg-dark">
  <LoadingAnimation :active="loading"></LoadingAnimation>
    <carousel class="mb-3"></carousel>
    <HomeMarquee class="mb-3"></HomeMarquee>
      <GoodsArea></GoodsArea>
    </div>
</template>

<script>
import carousel from '../components/HomeCarousel'
import HomeMarquee from '../components/HomeMarquee'
import GoodsArea from '../components/GoodsArea'
import emitter from '@/methods/emitter'
export default {
  components: {
    carousel,
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
