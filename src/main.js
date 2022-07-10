import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency, date } from './methods/filters'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date
}

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

setLocale('zh_TW')

app.component('VForm', Form)

app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(VueAxios, axios)
app.component('LoadingAnimation', Loading)
app.use(router)
app.mount('#app')
