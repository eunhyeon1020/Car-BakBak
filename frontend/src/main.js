import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes/routes'


/* css import 부분 */
import "@/assets/css/style.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
