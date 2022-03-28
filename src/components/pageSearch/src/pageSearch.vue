<template>
  <div class="pageSearch">
    <MyForm v-bind="searchformConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button size="large" type="danger" @click="handleResetClick"
            ><el-icon class="icon"><refresh /></el-icon> 重置
          </el-button>
          <el-button size="large" color="#626aef" type="primary" @click="handleQueryClick"
            ><el-icon class="icon"><search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </MyForm>
  </div>
</template>

<script setup lang="ts">
import MyForm from '../../../base-ui/form/index'
import { ref } from 'vue'
import { emit } from 'process'
const props = defineProps({
  searchformConfig: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])
// 将输入框数据与传入的配置匹配
const formItem = props.searchformConfig.formItems
const formOriginData: any = {}
for (const key in formItem) {
  const item = formItem[key]
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
// 重置
const handleResetClick = () => {
  // 1.
  // for (const key in formOriginData) {
  //   // 深拷贝，这样才能产生依赖
  //   formData.value[`${key}`] = formOriginData[key]
  // }
  // 2.
  formData.value = formOriginData

  // 让pagecontent重置列表内容
  emits('resetBtnClick')
}
// 搜索
const handleQueryClick = () => {
  // 让pageContent重新根据需求更新列表内容
  emits('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.pageSearch {
  background-color: #fff !important;
  margin: 0 20px;
  border-radius: 20px;
}
.header {
  color: #00f7ec82;
}
.handle-btns {
  padding-bottom: 30px;
  margin-right: 60px;
  text-align: right;
  font-size: 40px !important;
  font-weight: bold;
  .icon {
    margin-right: 10px;
  }
}
</style>
