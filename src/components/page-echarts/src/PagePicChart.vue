<template>
  <div class="pagePicChart">
    <BaseEchart :options="option" width="800px" height="420px"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echarts'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    optionData: any
  }>(),
  { optionData: () => ({}) }
)
const option = computed(() => {
  return {
    title: {
      text: '销量前10的商品数量',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 10,
      left: 'center',
      textStyle: {
        fontSize: 13,
        fontWeight: 700,
        width: 50,
        overflow: 'truncate',
        ellipsis: '...'
      }
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        center: ['50%', '40%'],
        selectedMode: 'single',
        data: props.optionData,
        label: {
          fontSize: 13
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped>
.pagePicChart {
  display: flex;
  justify-content: center;
}
</style>
