<template>
  <div class="breadCrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IBreadCrumb } from '../types'
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadCrumb[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
