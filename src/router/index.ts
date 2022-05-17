import localCache from '@/utils/cache'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { firstMenu } from '@/utils/mapMenus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginPage.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/MainPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/notFound/notFound.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
// 导航守卫
// 使用resolve是因为resolve会等异步组件加载完，此时firstname.url才有值
router.beforeResolve((to) => {
  // 如果不是去登录
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    // 并且没有登录过，就让用户去登陆
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
