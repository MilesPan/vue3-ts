<template>
  <div class="menupage">
    <pageContent :contentTableConfig="contentTableConfig" pageName="menu"> </pageContent>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/pageContent/index'
import contentTableConfig from './config'
</script>

<style scoped lang="less"></style>
