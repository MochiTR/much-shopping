<template>
  <div class="container vh-100">
    <LoadingAnimation :active="loading"></LoadingAnimation>
    <div class="text-end mt-4">
      <button class="btn btn-secondary" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <div class="overflow-auto">
    <table class="table mt-4 text-white text-nowrap ">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-secondary btn-sm"
                    @click="openCouponModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
                    @click="deleteCoupon(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    </div>
    <couponModal :coupon="tempCoupon" ref="couponModal"
    @update-coupon="updateCoupon"/>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
export default {
  components: { CouponModal },
  props: {
    config: Object
  },
  inject: ['emitter'],
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      loading: false,
      isNew: false
    }
  },
  methods: {
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    deleteCoupon (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '已刪除優待券'
            })
            this.getCoupons()
          }
        })
    },
    getCoupons () {
      this.loading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons
        this.loading = false
        console.log(response)
      })
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon })
          .then((response) => {
            if (response.data.success) {
              this.emitter.emit('push-message', {
                style: 'success',
                title: '已新增優待券'
              })
              this.getCoupons()
              this.$refs.couponModal.closeModal()
            } else {
              this.$refs.couponModal.closeModal()
              this.emitter.emit('push-message', {
                style: 'danger',
                title: '新增錯誤',
                content: response.data.message
              })
            }
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon })
          .then((response) => {
            if (response.data.success) {
              this.emitter.emit('push-message', {
                style: 'success',
                title: '優待券資料更新'
              })
              this.getCoupons()
              this.$refs.couponModal.closeModal()
            } else {
              this.$refs.couponModal.closeModal()
              this.emitter.emit('push-message', {
                style: 'danger',
                title: '更新失敗',
                content: response.data.message
              })
            }
          })
      }
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
