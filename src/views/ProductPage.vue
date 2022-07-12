<template>
<div class="container">
   <LoadingAnimation :active="loading"></LoadingAnimation>
    <div class="text-end">
        <button class="btn btn-secondary" @click="openModal">新增</button>
    </div>
<table class="table mt-4 text-white">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th>圖片</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td>{{item.category}}</td>
      <td>{{item.title}}</td>
      <td><img :src="item.imageUrl" class="img-fluid" style="min-width:200px;height:200px;"></td>
      <td class="text-right">
        {{$filters.currency(item.origin_price)}}
      </td>
      <td class="text-right">
        {{$filters.currency(item.price)}}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-secondary btn-sm" @click="editProduct(item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  <PaginationComponent :pages="pagination" @emit-pages="getProduct"></PaginationComponent>
<product-modal ref="ProductModal" @emit-product="updateProduct" v-bind:product="temp"></product-modal>
</div>
</template>

<script>
import productModal from '../components/ProductModal.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
export default {
  components: {
    productModal,
    PaginationComponent
  },
  inject: ['emitter'],
  data () {
    return {
      products: {},
      temp: {},
      newProduct: true,
      loading: false,
      pagination: {}
    }
  },
  methods: {
    openModal () {
      this.$refs.ProductModal.showModal()
      this.temp = {}
      this.newProduct = true
    },
    editProduct (product) {
      this.$refs.ProductModal.showModal()
      this.temp = { ...product }
      this.newProduct = false
    },
    getProduct (page = 1) {
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(api)
        .then((res) => {
          this.loading = false
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    updateProduct (product) {
      if (this.newProduct) {
        this.addProduct(product)
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
        this.$http.put(api, { data: product })
          .then((res) => {
            if (res.data.success) {
              this.emitter.emit('push-message', {
                style: 'success',
                title: '已儲存'
              })
              this.$refs.ProductModal.closeModal()
              this.temp = {}
              this.getProduct()
              this.newProduct = true
            } else {
              this.$refs.ProductModal.closeModal()
              this.emitter.emit('push-message', {
                style: 'danger',
                title: '更新錯誤',
                content: res.data.message.join('、')
              })
            }
          })
      }
    },
    addProduct (temp) {
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http.post(api, { data: temp })
        .then((res) => {
          this.loading = false
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '成功新增產品'
            })
            temp = {}
            this.$refs.ProductModal.closeModal()
            this.getProduct()
          } else {
            this.$refs.ProductModal.closeModal()
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '操作錯誤',
              content: res.data.message.join('、')
            })
          }
        })
    },
    deleteProduct (item) {
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(api)
        .then((res) => {
          this.loading = false
          if (res.data.success) {
            this.getProduct()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已刪除產品'
            })
          }
        })
    }
  },
  created () {
    this.getProduct()
  }

}
</script>
