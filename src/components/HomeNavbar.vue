<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" @click.prevent="toHome">Much</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" @click.prevent="toHome">◆ Home ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toAbout">◆ About ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toCustom">◆ Customize ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toContact">◆ Contact ◆</a>
        </li>
        <li class="nav-item ms-auto d-flex align-items-center">
          <a class="nav-link" href="#" @click.prevent="toLogin">◆ Admin Login ◆</a>
          <a class="nav-link btn btn-outline-secondary px-3" href="#" @click.prevent="toCart"><i class="bi bi-cart2"></i></a>
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
    toLogin () {
      this.$router.push('/login')
    },
    toCart () {
      this.$router.push('/cart')
    },
    toHome () {
      this.$router.push('/')
    },
    toAbout () {
      this.$router.push('/about')
    },
    toContact () {
      this.$router.push('/contact')
    },
    toCustom () {
      this.$router.push('/custom')
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
