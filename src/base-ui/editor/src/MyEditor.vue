<template>
  <div class="myEditor">
    <div ref="editorRef" class="editor"></div>
    <div :innerHTML="content.html" class="content" ref="contentRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, reactive, nextTick } from 'vue'
import WangEditor from 'wangeditor'
const editorRef = ref<HTMLDivElement>()
const content = reactive({
  html: '',
  text: ''
})
let instance: any
onMounted(() => {
  instance = new WangEditor(editorRef.value)
  Object.assign(instance.config, {
    onchange() {
      syncHTML()
    }
  })
  instance.config.menuTooltipPosition = 'down'
  instance.config.showFullScreen = true
  instance.create()
  // 监听屏幕大小时间
  window.onresize = () => {
    setEditorBoxSize()
  }
})
onBeforeUnmount(() => {
  instance.destroy()
  instance = null
})

const syncHTML = () => {
  content.html = instance.txt.html()
}
// 设置高度
const contentRef = ref<HTMLDivElement>()
contentRef.value?.setAttribute
function setEditorBoxSize() {
  const [navMenu, bodyContent]: any = editorRef.value!.children
  const height = contentRef.value!.offsetHeight - navMenu.offsetHeight
  bodyContent.style.height = height + 'px'
}
nextTick(() => {
  setEditorBoxSize()
})
defineExpose({
  content
})
</script>

<style scoped lang="less">
.myEditor {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: left;
  .editor {
    flex: 1;
    margin-right: 10px;
    height: 100%;
  }
  .content {
    flex: 1;
    padding: 10px 15px;
    background-color: #fff;
    border: 1px solid #c9d8db;
  }
}
</style>
