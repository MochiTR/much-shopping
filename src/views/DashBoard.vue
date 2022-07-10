<template>
<navbar></navbar>
<toastList></toastList>
<router-view></router-view>
</template>

<script>
import navbar from '../components/AdminNavbar.vue'
import emitter from '@/methods/emitter'
import toastList from '../components/ToastList.vue'

export default {
  components: {
    navbar,
    toastList
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api)
      .then((res) => {
        if (!res.data.success) { this.$router.push('/login') }
      })
  }
}
</script>
