<template>
  <div class="LoginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><user /></el-icon>
            <span>用户名登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="accountControl">
      <el-checkbox class="checkbox" v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginButton" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { Iphone, User } from '@element-plus/icons'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
import { ref } from 'vue'
const isKeepPassword = ref(true)
// accountRef在compositionApi里是拿到loginAccount实例
// accountRef在script setup里是拿到loginAccount暴露出的方法和自带属性
// InstanceType<typeof LoginAccount>表示拿到LoginAccount类型
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
// 区分手机登录还是用户名登录,默认打开account
const currentTab = ref<string>('account')
const handleLoginClick = () => {
  // 账号登录
  if (currentTab.value === 'account') accountRef.value?.loginAction(isKeepPassword.value)
  // 手机登录
  else {
    phoneRef.value?.phoneloginAction(isKeepPassword.value)
  }
}
</script>

<style scoped lang="less">
.LoginPanel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .accountControl {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .checkbox {
      color: #409eff;
    }
  }
  .loginButton {
    width: 100%;
    height: 50px;
    margin-top: 8px;
  }
}
.custom-tabs-label {
  .icon {
    position: relative;
    top: 1px;
    padding-right: 4px;
  }
}
</style>
