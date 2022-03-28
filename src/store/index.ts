import { getPageListData } from '@/service/main/system/system'
import useLoginStore from './login/login'
import { useSystemStore } from './main'
import { defineStore } from 'pinia'
import { IRootType } from './types'

const useRootStore = defineStore('root', {
  state: (): IRootType => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  actions: {
    async getInitialDataAction() {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 10
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', { offset: 0, size: 100 })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data
      // 2.保存数据
      this.entireDepartment = departmentList
      this.entireRole = roleList
      this.entireMenu = menuList
    }
  }
})
function setupStore() {
  const loginStore = useLoginStore()
  const rootStore = useRootStore()
  rootStore.getInitialDataAction()
  loginStore.loadLocalLoginData()
}

export { useLoginStore, setupStore, useSystemStore, useRootStore }
