interface IAccount {
  name: string
  password: string
}
interface ILoginResult {
  id: number
  name: string
  token: string
}
interface IDataType<T = any> {
  code: number
  data: T
}

// userinfo
interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

interface UserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}
// userMenu

interface UserMenu {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  permission: string
  children: UserMenuList
}
interface UserMenuList {
  [index: string]: UserMenu
}
export { IAccount, IDataType, ILoginResult, UserInfo, UserMenuList, UserMenu }
