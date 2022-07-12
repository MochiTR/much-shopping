<template>
<div class="container-fluid bg-dark">
     <HomeNavbar></HomeNavbar>
  <toastList></toastList>
<router-view></router-view>
</div>
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
  provide () {
    return {
      emitter
    }
  }
}
</script>
