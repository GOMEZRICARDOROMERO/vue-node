import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* importacion de bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
/* importacion de bootstrap */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
