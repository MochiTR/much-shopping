<template>
<LoadingAnimation :active="loading"></LoadingAnimation>
<div class="container text-white vh-100" style="margin-top:56px">
<div class="row">
    <div class="col-8">
商品 / {{product.category}}
<h1>{{product.title}}</h1>
<p>{{product.description}}</p>
<img :src="product.imageUrl" style="width:600px;height:400px;object-fit: cover;object-position: center;" class="img-fluid">
</div>
<div class="col-4 mt-5">
    <p class="fs-3">{{product.title}}</p><br>
    <p class="fs-4">{{product.content}}</p>
    <p class="text-muted text-decoration-line-through">售價<br>NT$ {{$filters.currency(product.origin_price)}}<br></p>
    <p class="fs-4">特價<br>NT$ {{$filters.currency(product.price)}}</p>
    <hr>
    <select class="form-select form-select-lg mb-3 me-3" aria-label=".form-select-lg example" v-model="quantity">
      <option selected disabled value="0">請選擇數量</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <button type="button" class="btn btn-outline-secondary" @click="addCart(product.id)" :disabled="this.status.loadingItem===product.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===product.id">
</div>加入購物車</button>
</div>
</div>
</div>
</template>

<script>

export default {
  inject: ['emitter'],
  data () {
    return {
      product: [],
      loading: false,
      quantity: 0,
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    addCart (id) {
      if (this.quantity === 0) {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '請選擇購買數量'
        })
      } else {
        this.status.loadingItem = id
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
        const cart = {
          product_id: id,
          qty: +this.quantity
        }
        this.$http.post(api, { data: cart })
          .then((res) => {
            if (res.data.success) {
              this.emitter.emit('push-message', {
                style: 'success',
                title: '已加入購物車'
              })
              console.log(res)
              this.status.loadingItem = ''
            } else {
              this.emitter.emit('push-message', {
                style: 'danger',
                title: '發生錯誤',
                content: res.data.message
              })
            }
          })
      }
    }
  },
  created () {
    const seed = this.$route.params.productId
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${seed}`
    this.loading = true
    this.$http.get(api)
      .then((res) => {
        this.loading = false
        this.product = res.data.product
      })
    window.scrollTo(0, 0)
  }
}
</script>
