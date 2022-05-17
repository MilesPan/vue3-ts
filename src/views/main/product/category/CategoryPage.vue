<template>
  <div class="categorypage">
    <HotCategory :chartsData="chartsData" />
    <pageSearch
      :searchformConfig="searchformConfig"
      class="pageSearch"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      class="pageContent"
      pageName="category"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></pageContent>
    <pageModal
      title="新建类别"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="category"
    ></pageModal>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import HotCategory from './cpn/HotCategory.vue'
import pageSearch from '@/components/pageSearch'
import pageContent from '@/components/pageContent'
import pageModal from '@/components/pageModal/src/pageModal.vue'
import { useCategoryStore } from '@/store/main/product/category'
import { usePageSearch } from '@/hooks/usePageSearchEffect'
import { usePageModal } from '@/hooks/usePageModalEffect'
import { searchformConfig, contentTableConfig, modalConfig } from './config'
const categoryStore = useCategoryStore()
categoryStore.getTop10DataAction()
const chartsData = computed(() => {
  return categoryStore.categoryGoodsTop10.map((item) => ({
    name: item.name,
    value: item.saleCount
  }))
})
const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
const { pageModalRef, defaultInfo, handleNewData, handleEditData } = usePageModal()
</script>

<style scoped lang="less"></style>
