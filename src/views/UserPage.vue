<template>
<div class="container-fluid bg-dark">
     <HomeNavbar></HomeNavbar>
  <toastList></toastList>
  <button @click.prevent="toTop" class="toTopBtn" ref="toTopBtn"><i class="bi bi-arrow-up-short fs-2"></i></button>
<router-view></router-view>
</div>
 <footer class="p-4 bg-dark text-white">
            <div class="container mb-5">
              <div class="card text-secondary p-5 mb-4 bg-dark border-secondary">
                <p>想知道更多嗎，輸入Email，訂閱Much的最新消息！</p>
                <div class="input-group">
                <input class="form-control bg-secondary"><button type="button" class="input-group-text btn btn-outline-secondary">訂閱</button>
                </div>
              </div>
            <div class="row row-cols-1">
              <div class="col-md-4 mb-3 text-center">
            <a class="h2 link-light text-decoration-none" href="./index.html">Much</a><br>
            <a href="#" class="link-light me-4 fs-4"><i class="bi bi-github"></i></a><a href="#" class="link-light fs-4 me-4"><i class="bi bi-twitter"></i></a><a href="#" class="link-light fs-4"><i class="bi bi-facebook"></i></a>
              </div>
              <div class="col-md-8">
                <div class="row row-cols-md-3 justify-content-between">
                <button type="button" class="btn py-2 fs-5 text-white"><i class="bi bi-telephone-fill text-white"></i> 01-233-233</button>
                <button type="button" class="btn py-2 fs-5 text-white"><i class="bi bi-twitter text-white"></i> 追蹤我們</button>
                <button type="button" class="btn py-2 fs-5 text-white"><i class="bi bi-question-lg text-white"></i> 常見問題</button>
                </div>
              </div>
            </div>
           </div>
           <hr>
            <div class="text-center">
            Copyright © 2022 Mochi.All rights reserved.
            <p class="text-muted mt-3">作為個人使用，無任何商業用途</p>
            </div>
          </footer>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar'
import emitter from '@/methods/emitter'
import toastList from '@/components/ToastList.vue'
export default {
  components: {
    toastList,
    HomeNavbar
  },
  data () {
    return {
      scrollY: window.scrollY
    }
  },
  methods: {
    toTop () {
      window.scrollTo(0, 0)
    },
    changeY () {
      this.scrollY = window.scrollY
    }
  },
  provide () {
    return {
      emitter
    }
  },
  mounted () {
    window.addEventListener('scroll', this.changeY)
  },
  watch: {
    scrollY: function (newV, oldV) {
      if (newV > 500) {
        this.$refs.toTopBtn.classList.add('showTopBtn')
      } else {
        this.$refs.toTopBtn.classList.remove('showTopBtn')
      }
    }
  }
}
</script>
