import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/console',
    name: 'console',
    redirect: '/index',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/Console')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
