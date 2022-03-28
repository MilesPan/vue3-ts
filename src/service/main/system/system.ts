import myRequest from '@/service'
import { IQueryInfo } from '@/store/main/system/systemTypes'
import { IDataType, IUserListType } from './types'
export function getPageListData(url: string, queryInfo: IQueryInfo) {
  return myRequest.post<IDataType<IUserListType>>({
    url,
    data: queryInfo
  })
}
//  url:/user/:id
export function deletePageData(url: string) {
  return myRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newDate: any) {
  return myRequest.post<IDataType>({
    url,
    data: newDate
  })
}
export function editPageData(url: string, edtiData: any) {
  return myRequest.patch<IDataType>({
    url,
    data: edtiData
  })
}
