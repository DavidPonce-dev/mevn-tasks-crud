import Vue from 'vue'
import router from './router'
//import store from './store'
import App from './App.vue'

//Vue.use(router)
//Vue.use(store)

new Vue({
  render: h => h(App)
}).$mount('#app')