<template>
<div class="mt-5 row justify-content-center">
  <form class="col-md-6" @submit.prevent="payOrder" style="margin-top:58px">
    <table class="table align-middle text-white">
      <thead>
      <th>品名</th>
      <th>數量</th>
      <th>單價</th>
      </thead>
      <tbody>
      <tr v-for="item in order.products" :key="item.id">
        <td>{{item.product.title}}</td>
        <td>{{item.qty}}個/{{item.product.unit}}</td>
        <td class="text-end">{{item.final_total}}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2" class="text-end">總計</td>
        <td class="text-end">{{order.total}}</td>
      </tr>
      </tfoot>
    </table>

    <table class="table text-white mt-5">
      <tbody>
      <tr>
        <th width="100">Email</th>
        <td>{{order.user.email}}</td>
      </tr>
      <tr>
        <th>姓名</th>
        <td>{{order.user.name}}</td>
      </tr>
      <tr>
        <th>收件人電話</th>
        <td>{{order.user.tel}}</td>
      </tr>
      <tr>
        <th>收件人地址</th>
        <td>{{order.user.address}}</td>
      </tr>
      <tr>
        <th>付款狀態</th>
        <td>
          <span v-if="order.is_paid===true" class="text-success">付款完成</span>
          <span v-else class="text-muted">尚未付款</span>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="text-end" v-if="order.is_paid===false">
      <button class="btn btn-danger">確認付款去</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(api, this.orderId)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
            console.log(this.order)
          }
        })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrder()
          }
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    this.getOrder()
  }
}
</script>
