export interface ISystemState {
  usersList: any[]
  usersCount: any
  roleList: any[]
  roleCount: any
  goodsList: any[]
  goodsCount: any
  menuList: any[]
  menuCount: number
  departmentList: any[]
  departmentCount: number
  categoryList: any[]
  categoryCount: number
  storyList: any[]
  storyCount: number
}
export interface IQueryInfo {
  offset?: number
  size?: number
  enable?: number | string
}
export interface IPageList {
  pageName: string
  queryInfo: IQueryInfo
}
