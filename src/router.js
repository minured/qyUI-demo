import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

import article from './views/article/router'
import goods from './views/goods/router'
import im from './views/im/router'
import order from './views/order/router'
import pay from './views/pay/router'
import shop from './views/shop/router'
import store from './views/store/router'
import test from './views/test/router'
import user from './views/user/router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
]

routes = routes.concat(article)
routes = routes.concat(goods)
routes = routes.concat(im)
routes = routes.concat(order)
routes = routes.concat(pay)
routes = routes.concat(shop)
routes = routes.concat(store)
routes = routes.concat(test)
routes = routes.concat(user)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
