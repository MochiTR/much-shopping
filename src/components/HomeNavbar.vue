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
          <a class="nav-link" href="#">◆ About ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">◆ Custom ◆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">◆ Contact ◆</a>
        </li>
        <li class="nav-item ms-auto d-flex align-items-center">
          <a class="nav-link" href="#" @click.prevent="toLogin">◆ Login ◆</a>
          <a class="nav-link btn btn-outline-secondary px-3" href="#" @click.prevent="toCart"><i class="bi bi-cart2"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    toCart () {
      this.$router.push('/user/cart')
    },
    toHome () {
      this.$router.push('/user/index')
    }
  }
}
</script>
