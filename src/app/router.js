import Vue from 'vue'
import VueRouter from 'vue-router'

import TaskApp from './views/TaskApp.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [{
    path:'/',
    component:TaskApp
  }]
})