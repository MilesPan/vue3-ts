/**
 * main中进行全局加载
 */
import { App } from 'vue'
import { setupStore, useLoginStore } from '../store'
import router from '@/router'
import { mapMenuesToRoutes } from '../utils/mapMenus'
import { UserMenuList } from '@/service/login/types'
import { registerProperties } from './registerPtoperties'

// 匹配之前要先注册好动态路由
// 否则一刷新就出错
// app.use(router)->install(){}->获取当前的path->router.routes里匹配路径->notFound->路由守卫->setupStore()->注册动态路由routes
// ->路由守卫的回调函数->to(notFound)
// 让store中有token
export default function registerGlobal(app: App) {
  setupStore()
  const store = useLoginStore()
  mapMenuesToRoutes(store.userMenus as UserMenuList)
    .then((routes) => {
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    })
    // 等待动态路由都加载好后再匹配
    .then(() => {
      app.use(router)
      registerProperties(app)
      app.mount('#app')
    })
}
