import myRequest from '..'
import { IDataType } from './types'
enum DashboardAPI {
  categoryGoodsCount = 'goods/category/count',
  categoryGoodsSale = 'goods/category/sale',
  categoryGoodsFavor = 'goods/category/favor',
  addressGoodsSale = 'goods/address/sale',
  categoryGoodsTop10 = '/goods/sale/top10'
}
export function getCategoryGoodsCount() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
export function getCategoryGoodsTop10() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsTop10
  })
}
