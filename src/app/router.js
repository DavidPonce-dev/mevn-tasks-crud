import VueRouter from 'vue-router'
import Home from './views/Home'

const routes = [
  {
    path: '/',
    component: Home
  }
]

VueRouter({
  mode: 'history',
  routes
})

export default router
