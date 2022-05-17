<template>
  <div class="navHeader">
    <el-icon class="foldMenu" @click="handleFoldClick">
      <!-- 点击切换图标 -->
      <component :is="isFold ? 'arrow-right-bold' : 'arrow-left-bold'" />
    </el-icon>
    <div class="content">
      <div><BreadCrumb :breadcrumbs="breadcrumbs" /></div>
      <div><UserInfo /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElDialog } from 'element-plus'
import BreadCrumb from '@/base-ui/breadCrumb/index'
import { useLoginStore } from '@/store'
import { pathMapBreadcrumb } from '@/utils/mapMenus'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import UserInfo from './UserInfo.vue'
//折叠
const isFold = ref(false)
const emits = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}

// 面包屑数据
const store = useLoginStore()

const breadcrumbs = computed(() => {
  const userMenus = store.userMenus // 改变需要重新计算面包屑
  const route = useRoute() // 改变需要重新计算面包屑
  return pathMapBreadcrumb(userMenus, route.path)
})
</script>

<style scoped lang="less">
.navHeader {
  display: flex;
  width: 100%;
  align-items: center;
  .foldMenu {
    font-size: 26px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
