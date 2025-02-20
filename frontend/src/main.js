import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes'

import axios from 'axios';


/* css import 부분 */
import "@/assets/css/style.css"

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
