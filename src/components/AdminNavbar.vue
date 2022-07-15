<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" @click.prevent="toHome">Much</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" ref="collapse">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" @click.prevent="toHome">◆ Home ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="coupon">◆ Coupon ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toUser">◆ User's Page ◆</a>
        </li>
        <li class="nav-item ms-auto">
          <a class="nav-link" href="#" @click.prevent="logout">◆ Logout ◆</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      collapse: ''
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    },
    toHome () {
      this.$router.push('/dashboard/product')
    },
    coupon () {
      this.$router.push('/dashboard/coupons')
    },
    toUser () {
      this.$router.push('/')
    }
  },
  mounted () {
    const collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    this.collpase = collapseElementList.map(function (collapseEl) {
      return new Collapse(collapseEl, {
        toggle: false
      })
    })
  }
}
</script>
