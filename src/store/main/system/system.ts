import { defineStore } from 'pinia'
import { ISystemState, IPageList } from './systemTypes'
import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/main/system/system'
export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData() {
      return (pageName: string): any => {
        // 拼接请求
        const convertName = `${pageName}List` as keyof typeof this
        return this[convertName]
        // switch (pageName) {
        //   case 'users':
        //     return this.usersList
        //     break
        //   case 'role':
        //     return this.roleList
        // }
      }
    },
    pageListCount() {
      return (pageName: string): any => {
        // 拼接请求
        const convertName = `${pageName}Count` as keyof typeof this
        return this[convertName]
      }
    }
  },
  actions: {
    async getPageListAction(payload: IPageList) {
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`
      // 1.对页面发送请求
      // changeUserList,changeUserCount
      // 对状态处理，因为状态值为文字，实际查找是通过1 0查找
      switch (payload.queryInfo.enable) {
        case '启用':
          payload.queryInfo.enable = 1
          break
        case '禁用':
          payload.queryInfo.enable = 0
          break
      }
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      const converList = `${pageName}List` as keyof typeof this.$state
      const converCount = `${pageName}Count` as keyof typeof this.$state
      this[converList] = list
      this[converCount] = totalCount

      // switch (pageName) {
      //   case 'users':
      //     this.usersList = list
      //     this.usersCount = totalCount
      //     break
      //   case 'role':
      //     this.roleList = list
      //     this.roleCount = totalCount
      //     break
      // }
    },
    async deletePageData(payload: any) {
      // 获取pageName和id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 删除
      await deletePageData(pageUrl)
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageData(payload: any) {
      // 创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 创建后请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPagedata(payload: any) {
      // 数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 数据后请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
})
