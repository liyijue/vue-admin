import router from './index'
import cookie from 'cookiejs'

const WhiteRoutes = ['/login']

router.beforeEach((to, _, next) => {
  if (cookie.get('token')) {
    next()
  } else {
    if (WhiteRoutes.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
