<template>
<div class="mb-3 text-center">
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
<div id="NoteBook" ref="NoteBook">
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
              {{notebook.description}}<a href="#" class="text-muted" @click.prevent="getDetail(notebook.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="addCart(notebook.id)" :disabled="this.status.loadingItem===notebook.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===notebook.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
      </div>
</div>

<div id="Pen" ref="Pen">
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
              {{pen.description}}<a href="#" class="text-muted" @click.prevent="getDetail(pen.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="addCart(pen.id)" :disabled="this.status.loadingItem===pen.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===pen.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
        </div>
</div>

<div id="SketchBook" ref="SketchBook">
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
              {{sketchbook.description}}<a href="#" class="text-muted" @click.prevent="getDetail(sketchbook.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="addCart(sketchbook.id)" :disabled="this.status.loadingItem===sketchbook.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===sketchbook.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
        </div>
</div>

<div id="Other" ref="Other" class="pb-4">
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
              {{other.description}}<a href="#" class="text-muted" @click.prevent="getDetail(other.id)">...More</a><br>
              <button type="button" class="btn btn-secondary" @click="addCart(other.id)" :disabled="this.status.loadingItem===other.id"><div class="spinner-border text-primary spinner-border-sm" role="status" v-if="this.status.loadingItem===other.id">
</div>加入購物車</button>
            </p>
          </div>
        </div>
        </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      notebooks: {},
      pens: {},
      sketchbooks: {},
      others: {},
      status: {
        loadingItem: ''
      }
    }
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
    this.getProduct()
  }
}
</script>
