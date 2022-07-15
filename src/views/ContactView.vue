<template>
<div class="container vh-100" style="margin-top:56px;">
<h1 class="text-white text-center">Contact Us</h1>
<V-Form action="" class="text-white my-6 d-flex justify-content-center align-items-center" v-slot="{ errors }">
    <div class="row row-cols-1 row-cols-md-2 flex-row-reverse g-3 w-75 ">
        <div class="col">
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
            <label for="message" class="form-label">Message</label>
            <V-Field as="textarea" name="message" class="form-control" id="message" rows="5" v-model="textarea" :class="{'is-invalid':errors['message']}" rules="required"></V-Field>
            <ErrorMessage name="message" class="invalid-feedback"></ErrorMessage>
        </div>
            </div>
                <button type="submit" class="btn btn-secondary mt-3 w-100">送出</button>
        </div>
        <div class="col">
            <iframe style="border:0;width:100%;height:100%;" loading="lazy" allowfullscreen
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJXNJjQqpQjQR-UfWtMFthwI&key=AIzaSyBCU6oUzlpZ2hmhD0Or1_Eat0OCqb4Hk3Q"></iframe>
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
      textarea: ''
    }
  }
}
</script>
