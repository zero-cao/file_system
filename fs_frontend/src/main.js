import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'
import './assets/css/global.css'

Vue.config.productionTip = false
// Vue.prototype.$http = axios
Vue.use(VueAxios, axios)

// axios.defaults.baseURL = 'http://10.74.97.117:7000'
axios.defaults.baseURL = 'http://127.0.0.1:7001'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
