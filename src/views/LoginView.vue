<template>
<div class="bg-dark vh-100 text-white">
<div class="container vh-100 d-flex align-items-center justify-content-center">
<HomeNavbar></HomeNavbar>
<V-Form class="col-md-6" v-slot="{ errors }" @submit="login">
<fieldset>
  <legend>Login</legend>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <V-Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入Email" rules="email|required"
                   v-model="user.username"></V-Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
         <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <V-Field id="password" name="密碼" type="password" class="form-control"
                   :class="{ 'is-invalid': errors['密碼'] }"
                   placeholder="請輸入密碼" rules="required"
                   v-model="user.password"></V-Field>
          <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="text-end">
                    <button type="submit" class="btn btn-secondary">Login</button>
        </div>
        </fieldset>
          </V-Form>
  </div>
  </div>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar.vue'
export default {
  components: {
    HomeNavbar
  },
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
          } else {
            alert('使用者帳號或密碼錯誤')
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
