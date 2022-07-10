<template>
<div class="container">
<form @submit.prevent="login">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.username">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      console.log(api)
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const token = res.data.token
            const expired = res.data.expired
            document.cookie = `Token=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard/product')
          }
        })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token

    const check = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(check)
      .then((res) => {
        if (res.data.success) { this.$router.push('/dashboard/product') }
      })
  }
}
</script>
