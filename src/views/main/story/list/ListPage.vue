<template>
  <div class="list">
    <pageContent
      ref="pageContentRef"
      class="pageContent"
      pageName="story"
      :contentTableConfig="contentTableConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/pageContent'
import { contentTableConfig } from './config/index'
</script>

<style scoped lang="less"></style>
