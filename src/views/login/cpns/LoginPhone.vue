<template>
  <div class="loginPhone">
    <el-form label-width="70px" :rules="rules" :model="phoneLogin" ref="formRef">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneLogin.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="identifyCode">
        <div class="getCode">
          <el-input v-model="phoneLogin.identifyCode" />
          <el-button type="primary" class="getButton">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store'
import { ElForm } from 'element-plus'
import 'element-plus/es/components/form/style/css'
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
const phoneLogin = reactive({
  phone: '',
  identifyCode: ''
})
const loginStore = useLoginStore()
const formRef = ref<InstanceType<typeof ElForm>>()
const phoneloginAction = (isKeepPassword: boolean) => {
  // 表单自带的验证
  formRef.value?.validate((valid) => {
    if (valid) {
      loginStore.phoneLoginAction({ ...phoneLogin })
    }
  })
}
defineExpose({
  phoneloginAction
})
</script>

<style scoped lang="less">
.getCode {
  display: flex;
  .getButton {
    margin-left: 6px;
  }
}
</style>
