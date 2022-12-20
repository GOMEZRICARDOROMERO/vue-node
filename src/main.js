import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* importacion de bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
/* importacion de bootstrap */

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
