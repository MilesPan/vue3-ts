<template>
  <div class="main">
    <el-container class="mainContent">
      <el-aside class="pageAside" :width="isCollapse ? '60px' : '210px'">
        <NavMenu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="pageHeader">
          <NavHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="pageContent">
          <div class="pageInfo">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NavMenu } from '@/components/nav-menu/index'
import { NavHeader } from '@/components/nav-header/index'
// 是否折叠
const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mainContent,
.page {
  height: 100%;
}

.pageContent {
  height: calc(100% - 48px);
  .pageInfo {
    background-color: #f0f2f5;
  }
}

.pageHeader {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.pageHeader {
  height: 48px !important;
}

.pageAside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.pageContent {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
