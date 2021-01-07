import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/token' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    }
    if (!store.getters.user) { // 获取用户信息
      store.dispatch('GetUserInfo').then().catch((err) => {
        store.dispatch('FedLogOut').then(() => {
          Message.error(err || '验证失败，请重新登录')
          next({ path: '/' })
        })
      })
    }
    if (!store.getters.global) {
      store.dispatch('GetGlobalInfo').then(response =>
          Message.success(response.message)
      ).catch(err =>
          Message.error(err || '获取全局参数失败')
      )
    }
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})