export interface ISystemState {
  usersList: any[]
  usersCount: any
  roleList: any[]
  roleCount: any
  goodsList: any[]
  goodsCount: any
  menuList: any[]
  menuCount: number
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
