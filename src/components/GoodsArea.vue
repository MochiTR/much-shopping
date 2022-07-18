<template>
<div class="mb-3 text-center" data-aos="fade-up" data-aos-duration="1000">
  <div class="row py-4 row-cols-md-4 gy-4">
    <div class="col">
      <button class="btn btn-primary btn_anchor w-100 w-md-75 py-3" @click.prevent="toTarget($refs.NoteBook)">NoteBooks</button>
      </div>
       <div class="col">
      <button class="btn btn-primary btn_anchor w-100 w-md-75 py-3" @click.prevent="toTarget($refs.Pen)">Pens</button>
      </div>
       <div class="col">
      <button class="btn btn-primary btn_anchor w-100 w-md-75 py-3" @click.prevent="toTarget($refs.SketchBook)">SketchBooks</button>
      </div>
       <div class="col">
      <button class="btn btn-primary btn_anchor w-100 w-md-75 py-3" @click.prevent="toTarget($refs.Other)">Others</button>
      </div>
  </div>
</div>
<div id="NoteBook" ref="NoteBook" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">NoteBook</li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Pen)" class="text-white text-decoration-none">Pen</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.SketchBook)" class="text-white text-decoration-none">Sketchbook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Other)" class="text-white text-decoration-none">Others</a></li>
        </ol>
      </nav>
      <div class="row row-cols-md-4 text-white">
        <div class="col py-4" v-for="notebook in notebooks" :key="notebook.id">
          <div class="card card_bg h-100">
            <img :src="notebook.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{notebook.title}}</h2>
            <h3>NT$ {{$filters.currency(notebook.price)}}</h3>
            </div>
            <p class="mt-auto card-footer">
              {{notebook.description}}<a href="#" class="text-white" @click.prevent="getDetail(notebook.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="openModal(notebook.id)" :disabled="this.status.loadingItem===notebook.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===notebook.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
      </div>
</div>

<div id="Pen" ref="Pen" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
<nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3">
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.NoteBook)" class="text-white text-decoration-none">NoteBook</a></li>
          <li class="breadcrumb-item active" aria-current="page">Pen</li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.SketchBook)" class="text-white text-decoration-none">Sketchbook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Other)" class="text-white text-decoration-none">Others</a></li>
        </ol>
      </nav>

      <div class="row row-cols-md-4 text-white">
        <div class="col py-4" v-for="pen in pens" :key="pen.id">
          <div class="card card_bg h-100">
            <img :src="pen.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{pen.title}}</h2>
            <h3>NT$ {{$filters.currency(pen.price)}}</h3>
            </div>
            <p class="mt-auto card-footer">
              {{pen.description}}<a href="#" class="text-white" @click.prevent="getDetail(pen.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="openModal(pen.id)" :disabled="this.status.loadingItem===pen.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===pen.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
        </div>
</div>

<div id="SketchBook" ref="SketchBook" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
<nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3">
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.NoteBook)" class="text-white text-decoration-none">NoteBook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Pen)" class="text-white text-decoration-none">Pen</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sketchbook</li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Other)" class="text-white text-decoration-none">Others</a></li>
        </ol>
      </nav>
      <div class="row row-cols-md-4 text-white">
        <div class="col py-4" v-for="sketchbook in sketchbooks" :key="sketchbook.id">
          <div class="card card_bg h-100">
            <img :src="sketchbook.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{sketchbook.title}}</h2>
            <h3>NT$ {{$filters.currency(sketchbook.price)}}</h3>
           </div>
            <p class="mt-auto card-footer">
              {{sketchbook.description}}<a href="#" class="text-white" @click.prevent="getDetail(sketchbook.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="openModal(sketchbook.id)" :disabled="this.status.loadingItem===sketchbook.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===sketchbook.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
        </div>
</div>

<div id="Other" ref="Other" class="pb-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3">
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.NoteBook)" class="text-white text-decoration-none">NoteBook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Pen)" class="text-white text-decoration-none">Pen</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.SketchBook)" class="text-white text-decoration-none">SketchBook</a></li>
          <li class="breadcrumb-item active" aria-current="page">Others</li>
        </ol>
      </nav>
      <div class="row row-cols-md-4 text-white">
        <div class="col py-4" v-for="other in others" :key="other.id">
          <div class="card card_bg h-100">
            <img :src="other.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{other.title}}</h2>
            <h3>NT$ {{$filters.currency(other.price)}}</h3>
            </div>
            <p class="mt-auto card-footer">
              {{other.description}}<a href="#" class="text-white" @click.prevent="getDetail(other.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="openModal(other.id)" :disabled="this.status.loadingItem===other.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===other.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
        </div>
        </div>
        <ConfirmModal ref="callModal" @emit-addCart="addCart" :pId="productId"></ConfirmModal>
</template>

<script>
import ConfirmModal from '../components/ConfirmModal.vue'
export default {
  components: {
    ConfirmModal
  },
  data () {
    return {
      notebooks: {},
      pens: {},
      sketchbooks: {},
      others: {},
      status: {
        loadingItem: ''
      },
      productId: ''
    }
  },
  props: {

  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.notebooks = res.data.products.filter(function (item) {
              return item.category === 'NoteBook'
            })
            this.pens = res.data.products.filter(function (item) {
              return item.category === 'Pen'
            })
            this.sketchbooks = res.data.products.filter(function (item) {
              return item.category === 'SketchBook'
            })
            this.others = res.data.products.filter(function (item) {
              return item.category === 'Other'
            })
            console.log(this.notebooks)
            console.log(this.pens)
            console.log(this.sketchbooks)
            console.log(this.others)
          }
        })
    },
    getDetail (id) {
      this.$router.push(`/product/${id}`)
    },
    toTarget (tag) {
      const top = tag.offsetTop
      window.scrollTo(0, top - 56)
    },
    addCart (id) {
      this.$refs.callModal.closeModal()
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
    },
    openModal (id) {
      this.$refs.callModal.showModal()
      this.productId = id
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
