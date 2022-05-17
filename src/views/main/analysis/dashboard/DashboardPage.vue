<template>
  <div class="dashboardpage">
    <el-row :gutter="20">
      <el-col :span="7">
        <MyCard title="分类商品数量(饼图)">
          <PieEcharts :pieData="categoryGoodsCount"></PieEcharts>
        </MyCard>
      </el-col>
      <el-col :span="10">
        <MyCard title="不同城市商品销量">
          <MapEcharts :mapData="addressGoodsSale"></MapEcharts> </MyCard
      ></el-col>
      <el-col :span="7">
        <MyCard title="分类商品数量(玫瑰图)">
          <RoseEcharts :roseData="categoryGoodsCount"></RoseEcharts> </MyCard
      ></el-col>
    </el-row>
    <el-row :gutter="20" class="contentRow">
      <el-col :span="12"
        ><MyCard title="分类商品的销量">
          <LineEcharts v-bind="categoryGoodsSale"> </LineEcharts>
        </MyCard>
      </el-col>
      <el-col :span="12">
        <MyCard title="分类商品的收藏">
          <BarEcharts v-bind="categoryGoodsFavor"></BarEcharts> </MyCard
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import MyCard from '@/base-ui/card'
import {
  PieEcharts,
  RoseEcharts,
  LineEcharts,
  BarEcharts,
  MapEcharts
} from '@/components/page-echarts/index'
import { useDashboardStore } from '@/store/main/analysis/dashboard'
import { computed } from 'vue'
const dashboardStore = useDashboardStore()
dashboardStore.getDashboardDataAction()
const categoryGoodsCount = computed(() => {
  return dashboardStore.categoryGoodsCount.map((item) => {
    if (item.goodsCount) return { name: item.name, value: item.goodsCount }
  })
})
const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = dashboardStore.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    if (item.goodsCount) {
      xLabels.push(item.name)
      values.push(item.goodsCount)
    }
  }
  return { xLabels, values }
})
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = dashboardStore.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    if (item.goodsFavor) {
      xLabels.push(item.name)
      values.push(item.goodsFavor)
    }
  }
  return { xLabels, values }
})
const addressGoodsSale = computed(() => {
  return dashboardStore.addressGoodsSale.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="less">
.contentRow {
  margin-top: 10px;
}
</style>
