<template>
  <div class="UserInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar class="el-avatar" :size="40" src="../../src/assets/img/tiger.jpg" />
        <span>pdyshuaib</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="close-bold" @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided icon="avatar">用户信息</el-dropdown-item>
          <el-dropdown-item icon="refresh"> 系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'
const router = useRouter()
const handleExitClick = () => {
  localCache.deleteCache('token')

  router.push('/main')
}
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  .el-avatar {
    margin-right: 10px;
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
