import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import UserList from '@/components/UserList'
import OrderList from '@/components/OrderList'
import MileageList from '@/components/MileageList'

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
      path: '/orders/:user_id',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/mileages/:user_id',
      name: 'MileageList',
      component: MileageList
    }
  ]
})
