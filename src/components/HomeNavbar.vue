<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Much</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">◆ Home ◆</a>
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
        <li class="nav-item ms-auto">
          <a class="nav-link" href="#">◆ Login ◆</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
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
    coupon () {
      this.$router.push('/dashboard/coupons')
    }
  }
}
</script>
