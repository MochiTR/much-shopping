<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center my-0">
      <li class="page-item">
        <a class="page-link bg-dark" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page -1 )">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{active:page===pages.current_page}">
        <a class="page-link bg-dark" href="#" @click.prevent="updatePage(page)">{{page}}</a>
      </li>
      <li class="page-item">
        <a class="page-link bg-dark" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page +1 )">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>
