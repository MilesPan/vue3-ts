<template>
  <div class="departmentpage">
    <div class="header">
      <pageSearch
        :searchformConfig="searchformConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      ></pageSearch>
    </div>
    <div class="content">
      <pageContent
        :contentTableConfig="contentTableConfig"
        pageName="department"
        ref="pageContentRef"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></pageContent>
    </div>
    <pageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      pageName="department"
      title="新建部门"
    ></pageModal>
  </div>
</template>

<script lang="ts" setup>
import pageSearch from '@/components/pageSearch'
import pageContent from '@/components/pageContent'
import pageModal from '@/components/pageModal'
import { contentTableConfig, searchformConfig, modalConfig } from './config/index'
import { usePageSearch } from '@/hooks/usePageSearchEffect'
import { usePageModal } from '@/hooks/usePageModalEffect'
const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearch()
const { pageModalRef, defaultInfo, handleNewData, handleEditData } = usePageModal()
</script>

<style scoped lang="less"></style>
