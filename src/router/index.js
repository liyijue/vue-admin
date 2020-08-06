import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      text: '首页'
    },
    hiden: true
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      text: '登录'
    },
    hiden: true,
    component: () => import('@/views/Login')
  },
  {
    path: '/console',
    name: 'console',
    redirect: '/index',
    meta: {
      text: '控制台',
      index: '1'
    },
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          text: '首页',
          index: '1-1'
        },
        component: () => import('@/views/Console')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
