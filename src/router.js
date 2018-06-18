import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Establishments from './views/Establishments.vue'
import Orders from './views/Orders.vue'
import Products from './views/Products.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: Orders
        },
        {
          path: '/orders',
          name: 'orders',
          component: Orders
        },
        {
          path: '/establishments',
          name: 'establishments',
          component: Establishments
        },
        {
          path: '/products',
          name: 'products',
          component: Products
        }
      ]
    }
  ]
})
