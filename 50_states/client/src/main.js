import Vue from 'vue'
import App from './App.vue'

// Import VueRouter library, and this app's routes
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import StateAPIService from '@/services/stateService'

Vue.use(VueRouter)

// Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// The leaflet stuff
import "leaflet/dist/leaflet.css"

// Add API service to Vue prototype
Vue.prototype.$stateService = StateAPIService

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
