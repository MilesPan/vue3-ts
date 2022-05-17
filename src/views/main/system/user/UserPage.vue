<template>
  <div class="userpage">
    <div class="search">
      <pageSearch
        :searchformConfig="searchformConfig"
        class="pageSearch"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      ></pageSearch>
      <pageContent
        ref="pageContentRef"
        class="pageContent"
        pageName="users"
        :contentTableConfig="contentTableConfig"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      >
      </pageContent>
      <pageModal
        title="新建用户"
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :modalConfig="modalConfigRef"
        pageName="users"
      ></pageModal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/pageContent/src/pageContent.vue'
import pageSearch from '@/components/pageSearch/index'
import pageModal from '@/components/pageModal/index'
import { searchformConfig, contentTableConfig, modalConfig } from './config'
import { usePageSearch } from '@/hooks/usePageSearchEffect'
import { usePageModal } from '@/hooks/usePageModalEffect'
import { useRootStore } from '@/store'
import { computed } from 'vue'
// 动态添加部门和角色列表
const rootStore = useRootStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  departmentItem!.options = rootStore.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id
  }))
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = rootStore.entireRole.map((item) => ({
    title: item.name,
    value: item.id
  }))
  return modalConfig
})

const newCallback = () => {
  // 拿到passwordi这个item
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  // 新建的时候显示密码栏
  if (passwordItem) {
    passwordItem.isHidden = false
  }
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  // 编辑的时候隐藏密码栏
  if (passwordItem) {
    passwordItem.isHidden = true
  }
}
const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
const { pageModalRef, defaultInfo, handleNewData, handleEditData } = usePageModal(
  newCallback,
  editCallback
)
</script>

<style scoped lang="less"></style>
