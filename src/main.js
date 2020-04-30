import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Contact from './components/Contact'
import About from './components/About'
// import History from '.components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home },
  {path: '/menu', component: Menu},
  {path: '/contact', component: Contact},
  {path: '/admin', component: Admin},
   {path: '/history', component: History},
  {path: '/about', component: About, children: [
    {path: '/delivery', component: Delivery},
    {path: '/ordering-guide', component: OrderingGuide},
  ]},
  {path: '/*', redirect: '/'}
]

const router = new VueRouter({
routes,
mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
