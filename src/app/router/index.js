import { createRouter, createWebHashHistory } from 'vue-router'

import TaskApp from '../views/TaskApp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TaskApp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
