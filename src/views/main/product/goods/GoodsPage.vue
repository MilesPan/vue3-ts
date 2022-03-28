<template>
  <div class="goodspage">
    <pageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">
        {{ '¥' + scope.row.oldPrice }}
      </template>
    </pageContent>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/pageContent'
import { contentTableConfig } from './config/index'
</script>

<style scoped lang="less"></style>
