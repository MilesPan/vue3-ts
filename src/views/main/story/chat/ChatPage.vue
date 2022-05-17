<template>
  <div class="chat">
    <div class="header">
      <el-input style="min-width: 300px" v-model="title"></el-input>
      <el-button @click="publishArticlesClick">发布文章</el-button>
    </div>
    <div class="content">
      <MyEditor ref="editRef"></MyEditor>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MyEditor from '@/base-ui/editor'
import { publishArticlesData } from '@/service/main/story'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
const editRef = ref<InstanceType<typeof MyEditor>>()
const title = ref<string>()
const publishArticlesClick = () => {
  publishArticlesData({
    title: title.value!,
    content: editRef.value!.content.html
  })
    .then((_) => {
      ElMessage({
        message: '发布成功',
        type: 'success'
      })
    })
    .catch(() => {
      ElMessage.error('发布失败')
    })
}
</script>

<style scoped lang="less">
.chat {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  .header {
    display: flex;
    text-align: right;
    height: 40px;
  }
  .content {
    flex: 1;
  }
}
</style>
