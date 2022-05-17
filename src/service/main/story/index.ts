import MyRequest from '@/service'
import { IDataType } from '@/service/login/types'
interface IArticlesDataType {
  title: string
  content: string
}
export function publishArticlesData(articlesData: IArticlesDataType) {
  return MyRequest.post<IDataType>({
    url: '/story',
    data: articlesData
  })
}
export function getArticlesData(payload: any) {
  return MyRequest.post<IDataType>({
    url: '/story/list',
    data: payload
  })
}
