<template>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">產品列表</a>
  </div>
</nav>
<div class="container-fluid">
  <toastList></toastList>
<router-view></router-view>
</div>
</template>

<script>
import emitter from '@/methods/emitter'
import toastList from '@/components/ToastList.vue'
export default {
  components: {
    toastList
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
