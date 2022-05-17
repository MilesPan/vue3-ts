<template>
  <div class="UserInfo">
    <div class="myAddress">
      <el-icon @click="showDialogClick"><chat-dot-round /></el-icon>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          class="el-avatar"
          :size="40"
          src="https://api.jikipedia.com/upload/9a10bd2e84de548368d6eb4b140b96a8_75.jpg"
        />
        <span>{{ userName }}</span>
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
    <el-dialog v-model="isShow" width="30%">
      <h2>QQ</h2>
      <img src="@/assets/img/qq.png" alt="" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/css'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'
import { ref } from 'vue'
const isShow = ref(false)
const router = useRouter()

const userName = localCache.getCache('name')
// 退出逻辑
const handleExitClick = () => {
  localCache.deleteCache('token')

  router.push('/main')
}
const showDialogClick = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped lang="less">
.UserInfo {
  display: flex;
  align-items: center;
  .myAddress {
    position: relative;
    right: 18px;
    font-size: 22px;
    transform: rotateY(180deg);
  }
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
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
.el-dialog {
  img {
    width: 100%;
  }
}
</style>
