<template>
<div class="mb-3">
<button class="btn btn-primary me-3">NoteBooks</button><button class="btn btn-primary me-3">Pens</button><button class="btn btn-primary me-3">SketchBooks</button><button class="btn btn-primary me-3">Others</button>
</div>
<div id="NoteBook" ref="NoteBook">
<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">NoteBook</li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Pen)">Pen</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.SketchBook)">Sketchbook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Other)">Others</a></li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-2" v-for="notebook in notebooks" :key="notebook.id">
          <div class="card">
            <!-- <div class="card-title">NoteBook A</div> -->
            <img :src="notebook.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{notebook.title}}</h2>
            <p>
              {{notebook.description}}<a href="#" class="text-muted">...More</a><br>
              <button type="button" class="btn btn-primary">加入購物車</button>
            </p></div>
          </div>
        </div>
        <!-- <div class="col-2">
          <div class="card">
            <div class="card-title">NoteBook B</div>
            <img src="https://images.unsplash.com/photo-1594171334348-47faf56d8501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">牛皮筆記本 (刻字)</h2>
            <p>
              商品描述<a href="#" class="text-muted">...More</a><br>
              <button type="button" class="btn btn-primary">加入購物車</button>
            </p></div>
          </div>
        </div>
        <div class="col-3"></div>
        <div class="col-3"></div> -->
      </div>
</div>

<div id="Pen" ref="Pen">
<nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3">
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.NoteBook)">NoteBook</a></li>
          <li class="breadcrumb-item active" aria-current="page">Pen</li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.SketchBook)">Sketchbook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Other)">Others</a></li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-2" v-for="pen in pens" :key="pen.id">
          <div class="card">
            <!-- <div class="card-title">NoteBook A</div> -->
            <img :src="pen.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{pen.title}}</h2>
            <p>
              {{pen.description}}<a href="#" class="text-muted">...More</a><br>
              <button type="button" class="btn btn-primary">加入購物車</button>
            </p></div>
          </div>
        </div>
        </div>
</div>

<div id="SketchBook" ref="SketchBook">
<nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3">
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.NoteBook)">NoteBook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Pen)">Pen</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sketchbook</li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Other)">Others</a></li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-2" v-for="sketchbook in sketchbooks" :key="sketchbook.id">
          <div class="card">
            <!-- <div class="card-title">sketchbook A</div> -->
            <img :src="sketchbook.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{sketchbook.title}}</h2>
            <p>
              {{sketchbook.description}}<a href="#" class="text-muted">...More</a><br>
              <button type="button" class="btn btn-primary">加入購物車</button>
            </p></div>
          </div>
        </div>
        </div>
</div>

<div id="Other" ref="Other">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3">
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.NoteBook)">NoteBook</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.Pen)">Pen</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="toTarget($refs.SketchBook)">SketchBook</a></li>
          <li class="breadcrumb-item active" aria-current="page">Others</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-2" v-for="other in others" :key="other.id">
          <div class="card">
            <!-- <div class="card-title">other A</div> -->
            <img :src="other.imageUrl" style="object-fit:cover;object-position:center center;height:300px;">
            <div class="card-body"><h2 class="fs-3">{{other.title}}</h2>
            <p>
              {{other.description}}<a href="#" class="text-muted">...More</a><br>
              <button type="button" class="btn btn-primary">加入購物車</button>
            </p></div>
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
      others: {}
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
    toTarget (tag) {
      const top = tag.offsetTop
      window.scrollTo(0, top)
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
