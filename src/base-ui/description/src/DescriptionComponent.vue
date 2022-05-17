<template>
  <div class="description">
    <el-descriptions border :column="options.column" :title="options.title">
      <template v-for="(item, index) in options.itemList" :key="index">
        <el-descriptions-item :label="item.name" label-align="left" align="left" width="1">
          <template #label>
            <b> {{ item.name }}</b>
          </template>
          <el-tag>{{ item.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { IOptionsType } from './type'
withDefaults(
  defineProps<{
    options: IOptionsType
  }>(),
  { options: () => ({} as IOptionsType) }
)
</script>

<style scoped>
.description {
  margin-top: -10px;
  margin-bottom: 20px;
}
</style>
