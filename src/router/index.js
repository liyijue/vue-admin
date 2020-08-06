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
  },
  {
    path: '/message',
    name: 'message',
    meta: {
      text: '信息管理',
      index: '2'
    },
    children: [
      {
        path: '/messageList',
        name: 'messageList',
        meta: {
          text: '信息列表',
          index: '2-1'
        }
      },
      {
        path: '/messageCategory',
        name: 'messageCategory',
        meta: {
          text: '信息分类',
          index: '2-2'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      text: '用户管理',
      index: '3'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
