<template>
  <div class="rolepage">
    <pageSearch
      :searchformConfig="searchformConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></pageContent>
    <pageModal
      title="新建角色"
      ref="pageModalRef"
      :defaulInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
      :otherInfo="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        class="tree"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        @check="handleCheckChange"
      />
    </pageModal>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/pageContent/src/pageContent.vue'
import pageModal from '@/components/pageModal/src/pageModal.vue'
import pageSearch from '@/components/pageSearch/src/pageSearch.vue'
import { usePageModal } from '@/hooks/usePageModalEffect'
import { usePageSearch } from '@/hooks/usePageSearchEffect'
import { useRootStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/mapMenus'
import { ElTree } from 'element-plus'
import { computed, ref, nextTick } from 'vue'
import { contentTableConfig, modalConfig, searchformConfig } from './config'
// 处理pageModal的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafKeys(item.menuList)

  // 弹窗组件还没有绑定就执行了这里的回调，因此值实际上是undefined
  // console.log(elTreeRef.value)
  // 为了确保组件已经渲染完，使用nextTick
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false)

  })
}
const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
const { pageModalRef, defaultInfo, handleNewData, handleEditData } = usePageModal(
  undefined,
  editCallback
)
const defaultProps = { children: 'children', label: 'name' }
const rootStore = useRootStore()
const menus = computed(() => rootStore.entireMenu)
const otherInfo = ref({})
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]

  otherInfo.value = { menuList }
}
</script>

<style scoped lang="less">
.tree {
  padding-left: 50px;
}
</style>
