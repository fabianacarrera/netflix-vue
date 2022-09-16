// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  import App from './App'
import Vue from 'vue'
import Home from './routes/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const Contacts = {template: '<p>Contatos</p>'}

const routes = [
  { path: '/', component: Home },
  { path: '/contacts', component: Contacts }
]

const router = new VueRouter({
  routes
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router
}).$mount('#app')
