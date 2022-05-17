<template>
  <div class="pageModal">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="25%"
      top="20vh"
      center
      destroy-on-close
    >
      <myForm v-bind="modalConfig" v-model="formData"></myForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import myForm from '@/base-ui/form/index'
import { useSystemStore } from '@/store'
const dialogVisible = ref(false)
const formData = ref<any>({})
const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    required: true
  }
})
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
const systemStore = useSystemStore()
// 确定按钮的逻辑
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    //有值说明是编辑
    systemStore.editPagedata({
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  } else {
    // 没有值说明是新建
    systemStore.createPageData({
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
}
defineExpose({
  dialogVisible
})
</script>

<style scoped></style>
