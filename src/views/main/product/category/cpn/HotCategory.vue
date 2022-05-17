<template>
  <div class="hotCategory">
    <CardBox title="销量前十" class="box">
      <el-collapse class="categoryBox">
        <el-collapse-item title="点击展开" name="1">
          <PagePicChart :optionData="chartsData" />
        </el-collapse-item>
      </el-collapse>
    </CardBox>
  </div>
</template>

<script setup lang="ts">
import PagePicChart from '@/components/page-echarts/src/PagePicChart.vue'
import CardBox from '@/base-ui/card/src/CardBox.vue'
const props = withDefaults(
  defineProps<{
    chartsData: any
  }>(),
  { chartsData: () => [] }
)
</script>

<style scoped lang="less">
.hotCategory {
  margin: 0 20px;
  .box {
    border-radius: 20px;
  }
}
:deep(.el-collapse-item__header:hover) {
  color: orange;
}
</style>
