import Vue from 'vue'
import App from './App.vue'
/* importacion de bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
/* importacion de bootstrap */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
