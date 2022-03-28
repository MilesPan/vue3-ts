import { defineStore } from 'pinia'
import { IDashboardType } from './dashboardTypes'
import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/analysis/dashboard'
export const useDashboardStore = defineStore('dashboard', {
  state: (): IDashboardType => {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  actions: {
    // 请求图表数据
    async getDashboardDataAction() {
      const categoryCountResult = await getCategoryGoodsCount()
      this.categoryGoodsCount = categoryCountResult.data
      const categorySaleResult = await getCategoryGoodsSale()
      this.categoryGoodsSale = categorySaleResult.data
      const categoryFavorResult = await getCategoryGoodsFavor()
      this.categoryGoodsFavor = categoryFavorResult.data
      const addressGoodsResult = await getAddressGoodsSale()
      this.addressGoodsSale = addressGoodsResult.data
    }
  }
})
