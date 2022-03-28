import { IDataType } from '@/service/login/types'

export interface List {
  id: number
  name: string
  realname: string
  cellphone: any
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}

export interface IUserListType {
  list: List[]
  totalCount: number
}

export { IDataType }
