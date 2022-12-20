import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/singup',
    name: 'singup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingupView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
