<template>
  <div class="toast-container fixed-top">
    <ToastComponent v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import ToastComponent from '@/components/ToastComponent.vue'
export default {
  components: { ToastComponent },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
