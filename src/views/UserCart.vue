<template>
<div class="container text-white" style="margin-top:58px">
<LoadingAnimation :active="loading"></LoadingAnimation>
<div class="row row-cols-1 justify-content-center vh-100">
    <!-- <div class="col-md-8">
<table class="table mt-4 text-white">
  <thead>
    <tr>
      <th width="120">圖片</th>
      <th>產品名稱</th>
      <th width="120">價格</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td style="width:300px">
      <div style="height:200px;background-size: cover;background-position: center;" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
      </td>
      <td>{{item.title}}</td>
      <td class="text-right">
        原價{{$filters.currency(item.origin_price)}}
        售價{{$filters.currency(item.price)}}
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="getProduct(item.id)">查看更多</button>
          <button class="btn btn-outline-danger btn-sm" @click="addCart(item.id)" :disabled="this.status.loadingItem===item.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===item.id">
</div>加入購物車</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div> -->
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
        <input class="form-control" value="總計：" disabled><input class="form-control w-25" style="border-left:0px" :value=$filters.currency(cart.final_total) disabled><button class="input-group-text btn btn-outline-primary w-50 w-lg-75" @click="createOrder">結帳</button>
    </div>
</div>
</div>
<!-- <div class="mt-5 row justify-content-center">
      <V-Form class="col-md-6" v-slot="{ errors }"
            @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <V-Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required"
                   v-model="form.user.email"></V-Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <V-Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></V-Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <V-Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></V-Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <V-Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></V-Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </V-Form>
    </div> -->
</div>
</template>

<script>

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
      this.$router.push(`/user/product/${id}`)
    },
    getCart () {
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.loading = false
          this.cart = res.data.data
          console.log(this.cart.carts)
        })
    },
    addCart (id) {
      console.log(id)
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
          this.getCart()
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
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已建立訂單'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '已建立訂單',
              content: res.data.message
            })
          }
        })
    }
  },
  created () {
    this.getProductions()
    this.getCart()
  }
}
</script>
