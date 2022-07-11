<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" ref="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style="height:500px">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" class="w-100" style="height:500px;object-fit:cover;object-position:center center" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1611619899256-5e61d4c46df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-100" style="height:500px;object-fit:cover;object-position:center center"  alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-100" style="height:500px;object-fit:cover;object-position:center center"  alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel'
export default {
  data () {
    return {
      carousel: {}
    }
  },
  mounted () {
    this.carousel = new Carousel(this.$refs.carousel, {
      interval: 3000
    })
  }
}

</script>
