<template>
<div style="margin-top:56px;" class="text-white"></div>
<h1 class="text-white text-center">Customize Step</h1>
<div class="container py-5">
<h2 class="text-white text-center mb-4">客製流程</h2>
<div class="row row-cols-md-5 text-white justify-content-evenly gy-4">
    <div class="col-md-2 d-flex align-items-center flex-column">
        <div class="bg-secondary rounded-circle" style="max-width:200px;">
        <img src="https://static.thenounproject.com/png/101952-200.png" class="img-fluid">
        </div>
        <div class="text-center mt-3">
        <h3>樣式</h3>
        <p>下單前在商品備註寫上規格<br>(ex:文字樣式、大小)</p>
        </div>
    </div>
    <div class="col-md-2 d-flex align-items-center flex-column">
        <div class="bg-secondary rounded-circle" style="max-width:200px;">
        <img src="https://icon-library.com/images/35247-200_12765.png" class="img-fluid">
        </div>
        <div class="text-center mt-3">
        <h3>設計</h3>
        <p>確認收到訂單並初步設計</p>
        </div>
    </div>
    <div class="col-md-2 d-flex align-items-center flex-column">
        <div class="bg-secondary rounded-circle" style="max-width:200px;">
        <img src="https://static.thenounproject.com/png/1054184-200.png" class="img-fluid">
        </div>
        <div class="text-center mt-3">
        <h3>確認</h3>
        <p>提供設計與顧客討論是否需要更改</p>
        </div>
    </div>
    <div class="col-md-2 d-flex align-items-center flex-column">
        <div class="bg-secondary rounded-circle" style="max-width:200px;">
        <img src="https://icons.veryicon.com/png/o/education-technology/daily-stationery-icon/pen-40.png" class="img-fluid">
        </div>
        <div class="text-center mt-3">
        <h3>製作</h3>
        <p>與顧客討論完成後開始製作</p>
        </div>
    </div>
    <div class="col-md-2 d-flex align-items-center flex-column">
        <div class="bg-secondary rounded-circle" style="max-width:200px;">
        <img src="https://cdn-icons-png.flaticon.com/512/2928/2928550.png" class="img-fluid">
        </div>
        <div class="text-center mt-3">
        <h3>交貨</h3>
        <p>完成後於三天內寄送商品</p>
        </div>
    </div>
</div>
</div>
<div class="container py-5">
<h2 class="text-white text-center mb-4">如果有其他客製商品需求</h2>
<V-Form action="" class="text-white" v-slot="{ errors }">
    <div class="row row-cols-1 row-cols-md-2 g-3 justify-content-center align-items-center">
            <div class="row g-3">
        <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <V-Field type="email" name="email" class="form-control" placeholder="請輸入Email" id="email" v-model="email" :class="{ 'is-invalid': errors['email'] }" rules="email|required"></V-Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="col-md-6">
            <label for="name" class="form-label">Name</label>
            <V-Field type="name" name="name" class="form-control" placeholder="請輸入姓名" id="name" v-model="name" :class="{'is-invalid':errors['name']}" rules="required"></V-Field>
            <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="col-md-12">
            <label for="item" class="form-label">Item</label>
            <V-Field type="item" name="item" class="form-control" placeholder="請輸入產品" id="item" v-model="item" :class="{'is-invalid':errors['item']}" rules="required"></V-Field>
            <ErrorMessage name="item" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="col-md-12">
            <label for="message" class="form-label">Message</label>
            <V-Field as="textarea" name="message" class="form-control" id="message" rows="5" v-model="textarea" :class="{'is-invalid':errors['message']}" rules="required"></V-Field>
            <ErrorMessage name="message" class="invalid-feedback"></ErrorMessage>
        </div>
           <button type="submit" class="btn btn-secondary mt-3">送出</button>
            </div>
    </div>
</V-Form>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      name: '',
      item: '',
      textarea: ''
    }
  }
}
</script>
