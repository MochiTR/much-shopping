<template>
<div class="container text-white pb-5" style="margin-top:56px">
<LoadingAnimation :active="loading"></LoadingAnimation>
<div class="row row-cols-1 justify-content-center h-100" style="min-height:100vh">
<div class="col" v-if="cart.carts">
<div class="overflow-auto">
    <table class="table mt-4 text-white text-nowrap">
  <thead>
    <tr>
      <th width="200"></th>
      <th width="240">品名</th>
      <th width="150">數量</th>
      <th width="150">單價</th>
      <th>備註</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cart in cart.carts" :key="cart.id">
      <td>
      <img class="img-fluid" :src="cart.product.imageUrl" style="height:150px; width:200px;object-fit: cover;object-position: center;">
      </td>
      <td><a href="#" @click.prevent="getProduct(cart.product_id)">{{cart.product.title}}</a></td>
      <td class="text-right">
          <div class="input-group input-group-sm">
               <input type="number" class="form-control" min="1" v-model.number="cart.qty" @change="updateCart(cart)" :disabled="this.status.loadingItem===cart.id">
                <div class="input-group-text">/ {{ cart.product.unit }}</div>
          </div>
      </td>
      <td>
       {{$filters.currency(cart.final_total)}}
      </td>
      <td>
        <textarea class="form-control" placeholder="輸入備註" id="floatingTextarea2" style="height:150px;resize:none;"></textarea>
      </td>
      <td>
      <button type="button" class="btn btn-outline-danger" @click.prevent="deleteCart(cart)"><i class="bi bi-trash3-fill"></i></button>
      </td>
    </tr>
  </tbody>
</table>
</div>
  <div class="text-start">
    <button type="button" class="btn btn-outline-danger" @click="clearCart">清空購物車</button>
  </div>
  <div class="text-end">
    總計：{{$filters.currency(cart.final_total)}}
    </div>
    <hr>
    <div class="input-group">
        <input class="form-control" v-model="couponCode"><button class="input-group-text btn btn-outline-secondary" @click="useCoupon">使用優惠券</button>
    </div>
    <hr>
    <div class="input-group">
        <input class="form-control" value="總計：" disabled><input class="form-control w-25" style="border-left:0px" :value=$filters.currency(cart.final_total) disabled><button class="input-group-text btn btn-outline-primary w-50 w-lg-75" @click="openForm">結帳</button>
    </div>
</div>
<div class="col text-center mt-5" v-else>
  <h2>購物車目前沒有商品</h2>
  <p class="display-1" @click="toHome" style="cursor:pointer;"><span class="display-5">將商品加入購物車吧！</span><i class="bi bi-three-dots"></i><i class="bi bi-cart3"></i></p>
</div>
</div>
<orderFormModal ref="OrderModal" @emit-form="createOrder"></OrderFormModal>
</div>
</template>

<script>
import orderFormModal from '@/components/OrderFormModal'
export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      loading: false,
      status: {
        loagindItem: ''
      },
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      couponCode: ''
    }
  },
  components: {
    orderFormModal
  },
  inject: ['emitter'],
  methods: {
    getProductions () {
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          this.loading = false
          if (res.data.success) {
            this.products = res.data.products
          }
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    getCart () {
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.loading = false
          this.cart = res.data.data
          console.log(this.cart.carts)
          if (this.cart.carts.length === 0) {
            this.cart.carts = 0
          }
        })
    },
    updateCart (cart) {
      this.loading = true
      this.status.loadingItem = cart.id
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`
      const cartitem = {
        product_id: cart.product_id,
        qty: cart.qty
      }
      this.$http.put(api, { data: cartitem })
        .then((res) => {
          this.loading = false
          this.status.loadingItem = ''
          this.getCart()
        })
    },
    deleteCart (cart) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已移除購物車內商品'
            })
            this.getCart()
          }
        })
    },
    clearCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '購物車已清空'
            })
            this.getCart()
          }
        })
    },
    useCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.$http.post(api, { data: coupon })
        .then((res) => {
          this.getCart()
          console.log(this.couponCode)
        })
    },
    openForm () {
      this.$refs.OrderModal.showModal()
    },
    createOrder (order) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已建立訂單'
            })
            this.clearCart()
            this.$refs.OrderModal.closeModal()
            this.$router.push(`/checkout/${res.data.orderId}`)
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '已建立訂單',
              content: res.data.message
            })
          }
        })
    },
    toHome () {
      this.$router.push('/')
    }
  },
  created () {
    this.getProductions()
    this.getCart()
    window.scrollTo(0, 0)
  }
}
</script>
