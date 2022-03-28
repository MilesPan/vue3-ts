<template>
  <div class="baseEchart">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useEchartsEffect } from '../hooks/useEchartsEffect'
import { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartRef = ref<HTMLElement>()
// 渲染完后才能取到echartRef对象
onMounted(() => {
  const { setOPtions } = useEchartsEffect(echartRef.value!)
  watchEffect(() => {
    setOPtions(props.options)
  })
})
</script>

<style scoped></style>
