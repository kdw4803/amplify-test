import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import UserList from '@/components/UserList'
import OrderList from '@/components/OrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/orders',
      name: 'OrderList',
      component: OrderList
    }
  ]
})
