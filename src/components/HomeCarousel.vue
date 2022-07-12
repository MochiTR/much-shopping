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
      <div class="carousel-caption" style="background:linear-gradient(0deg, rgba(52, 53, 54,0.2), rgba(193, 202, 214,0.2));">
      <h3 class="fs-2">Much</h3>
      <p class="fs-4"> 文具 | 客製 </p>
      <p>我們提供各式各樣文具、部分客製產品，提供顧客良好的使用體驗</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1611619899256-5e61d4c46df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-100" style="height:500px;object-fit:cover;object-position:center center"  alt="...">
      <div class="carousel-caption" style="background:linear-gradient(0deg, rgba(52, 53, 54,0.2), rgba(193, 202, 214,0.2));">
      <p class="fs-4"> 客製 </p>
      <p>每一個客製產品都會與顧客做確認與建議，用心製作最適合的產品</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-100" style="height:500px;object-fit:cover;object-position:center center"  alt="...">
      <div class="carousel-caption" style="background:linear-gradient(0deg, rgba(52, 53, 54,0.2), rgba(193, 202, 214,0.2));">
      <p class="fs-4"> 聯絡 </p>
      <p>對於產品使用或是客制有其他需求，歡迎聯絡我們團隊，會盡快為您服務</p>
      </div>
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
