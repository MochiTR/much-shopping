<template>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" refs="marquee">
  <div class="carousel-inner text-white">
    <div class="carousel-item active">
      <p><span class="badge bg-secondary">！最新消息！</span>  首次客製文具享8折，優待碼:2022First</p>
    </div>
    <div class="carousel-item">
      <p><span class="badge bg-secondary">！最新消息！</span>  歡迎詢問目前無上架之客製產品，若有多個需求可以為您服務 <a href="#" class="text-muted" @click.prevent="toCustom">More...</a></p>
    </div>
  </div>
</div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel'
export default {
  data () {
    return {
      marquee: {}
    }
  },
  methods: {
    toCustom () {
      this.$router.push('/custom')
    }
  },
  mounted () {
    this.marquee = new Carousel(this.$refs.marquee, {
      interval: 1000
    })
  }
}
</script>
