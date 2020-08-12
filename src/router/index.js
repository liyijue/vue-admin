import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'

// 解决 element UI 导航栏点击相同路由时报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    hiden: true,
    meta: {
      text: '首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    hiden: true,
    meta: {
      text: '登录'
    },
    component: () => import('@/views/Login')
  },
  {
    path: '/console',
    name: 'console',
    redirect: '/index',
    meta: {
      text: '控制台',
      icon: 'console'
    },
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          text: '首页',
          index: '/index'
        },
        component: () => import('@/views/Console')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    redirect: '/messageList',
    meta: {
      text: '信息管理',
      icon: 'message'
    },
    component: Layout,
    children: [
      {
        path: '/messageList',
        name: 'messageList',
        meta: {
          text: '信息列表',
          index: '/messageList'
        }
      },
      {
        path: '/messageCategory',
        name: 'messageCategory',
        meta: {
          text: '信息分类',
          index: '/messageCategory'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/userList',
    meta: {
      text: '用户管理',
      icon: 'user'
    },
    component: Layout,
    children: [
      {
        path: '/userList',
        name: 'userList',
        meta: {
          text: '用户列表',
          index: '/userList'
        }
      },
      {
        path: '/userCategory',
        name: 'userCategory',
        meta: {
          text: '用户分类',
          index: '/userCategory'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
