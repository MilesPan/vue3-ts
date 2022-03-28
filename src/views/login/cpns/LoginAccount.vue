<template>
  <div class="loginAccount">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import localCache from '@/utils/cache'
import { useLoginStore } from '@/store/index'
import { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
// login的store
const loginStore = useLoginStore()
const account = reactive({
  // 记住密码
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
// elform组件对象
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  // 表单自带的验证
  formRef.value?.validate((valid) => {
    if (valid) {
      // 真正的登录逻辑
      // 1.是否需要记住密码
      if (isKeepPassword) {
        // localStorage本地缓存
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      }
      // 不记住密码
      else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
      // 2.登录验证
      // 登录的逻辑转移到pinia中
      loginStore.accountLoginAction({ ...account })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped></style>
