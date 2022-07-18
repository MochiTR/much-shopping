import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Much | 登入'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/ProductPage.vue'),
        meta: {
          title: 'Much | 商品管理'
        }
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsPage.vue'),
        meta: {
          title: 'Much | 優惠券'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'user',
    component: () => import('../views/UserPage.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/UserHome.vue'),
        meta: {
          title: 'Much | 首頁'
        }
      },
      {
        path: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
          title: 'Much | 關於我們'
        }
      },
      {
        path: 'contact',
        component: () => import('../views/ContactView.vue'),
        meta: {
          title: 'Much | 聯絡頁面'
        }
      },
      {
        path: 'custom',
        component: () => import('../views/CustomView.vue'),
        meta: {
          title: 'Much | 客製化相關'
        }
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
        meta: {
          title: 'Much | 購物車'
        }
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue'),
        meta: {
          title: 'Much | 產品頁面'
        }
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue'),
        meta: {
          title: 'Much | 結帳頁面'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
