import router from '@/router/index'
import { mapMenuesToRoutes, mapMenusToPermission } from '@/utils/mapMenus'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount, UserInfo, UserMenuList } from '@/service/login/types'
import { IloginType } from './loginTypes'
import localCache from '@/utils/cache'
import { defineStore } from 'pinia'
import { useRootStore } from '..'
const useLoginStore = defineStore('login', {
  state: (): IloginType => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localCache.setCache('token', token)
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)
    },
    setUserMenus(userMenus: UserMenuList) {
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)
    },
    setRouteByUser(userMenus: UserMenuList) {
      mapMenuesToRoutes(userMenus).then((routes) => {
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
        const permissions = mapMenusToPermission(userMenus)
        this.permissions = permissions
      })
    },
    getInitData() {
      const rootSotre = useRootStore()
      rootSotre.getInitialDataAction()
    },
    // 用户登录请求
    async accountLoginAction(account: IAccount) {
      // 1.登录逻辑
      if (account.name === 'coderpdy') account.name = 'coderwhy'
      const loginResult = await accountLoginRequest(account)

      const { id, token } = loginResult.data
      this.setToken(token)
      // 发送初始化的请求(获取role和department)
      this.getInitData()
      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.setUserInfo(userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      this.setUserMenus(userMenus)
      this.setRouteByUser(userMenus)
      router.push('/main')
    },
    // 手机登录请求
    phoneLoginAction(payload: any) {
      return payload
    },
    // 页面加载就获取一次本地的数据
    loadLocalLoginData() {
      // 如果本地有token，就将其赋值给store·····
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      this.setRouteByUser(userMenus)
      if (token) {
        this.setToken(token)
        // 发送初始化的请求(获取role和department)
        this.getInitData()
      }
      if (userInfo) {
        this.setUserInfo(userInfo)
      }
      if (userMenus) {
        this.setUserMenus(userMenus)
      }
    }
  }
})
export default useLoginStore
