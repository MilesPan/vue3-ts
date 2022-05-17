import { defineStore } from 'pinia'
import { ICategoryType } from './categoryType'
import { getCategoryGoodsTop10 } from '@/service/analysis/dashboard'
export const useCategoryStore = defineStore('category', {
  state: (): ICategoryType => {
    return {
      categoryGoodsTop10: []
    }
  },
  actions: {
    // 请求图表数据
    async getTop10DataAction() {
      const categoryTop10Result = await getCategoryGoodsTop10()
      this.categoryGoodsTop10 = categoryTop10Result.data
    }
  }
})
