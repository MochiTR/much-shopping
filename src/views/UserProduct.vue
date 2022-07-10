<template>
<div class="container">
<div class="my-3">
<div class="row">
    <div class="col-8">
購物車 / 食物
<h1>{{product.title}}</h1>
<p>{{product.description}}</p>
<img :src="product.imageUrl" style="width:600px" class="img-fluid">
</div>
<div class="col-4">
    售價<br>{{product.price}}
    <hr>
    <button type="button" class="btn btn-outline-danger" @click="addCart(product.id)" :disabled="this.status.loadingItem===product.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===product.id">
</div>加入購物車</button>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      product: [],
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    addCart (id) {
      this.status.loadingItem = id
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          console.log(res)
          this.status.loadingItem = ''
        })
    }
  },
  created () {
    const seed = this.$route.params.productId
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${seed}`
    this.$http.get(api)
      .then((res) => {
        this.product = res.data.product
      })
  }
}
</script>
