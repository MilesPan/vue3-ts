import { UserMenuList } from '@/service/login/types'
export interface IloginType {
  token: string
  userInfo: any
  userMenus: UserMenuList | []
  permissions: string[]
}
