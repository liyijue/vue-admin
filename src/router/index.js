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
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '',
        redirect: 'console'
      },
      {
        path: 'console',
        name: 'console',
        component: () => import('@/views/Console')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
