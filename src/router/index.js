import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import UserList from '@/components/UserList'
import UserDetail from '@/components/UserDetail'
import OrderList from '@/components/OrderList'
import MileageList from '@/components/MileageList'
import PgList from '@/components/PgList'
import RefundList from '@/components/RefundList'
import ProfitList from '@/components/ProfitList'

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
      path: '/users/:user_id',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/orders',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/mileages',
      name: 'MileageList',
      component: MileageList
    },
    {
      path: '/pgs',
      name: 'PgList',
      component: PgList
    },
    {
      path: '/refunds',
      name: 'RefundList',
      component: RefundList
    },
    {
      path: '/profits',
      name: 'ProfitList',
      component: ProfitList
    }
  ]
})
