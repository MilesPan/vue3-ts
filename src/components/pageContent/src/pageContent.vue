<template>
  <div class="pageContent">
    <TableComponent
      v-bind="contentTableConfig"
      :listCount="dataCount"
      :listData="(dataList as any[])"
      v-model:page="pageInfo"
    >
      <!-- 1.header的插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick">新建</el-button>
        <el-button icon="Refresh" type="primary">刷新</el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable || scope.row.status ? 'primary' : 'danger'"
          >{{ scope.row.enable || scope.row.status ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <strong>{{ $filter?.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filter?.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            type="text"
            icon="Edit"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
            >编辑
          </el-button>
          <el-button
            size="small"
            type="text"
            icon="Delete"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 动态插入剩余插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName"></template>
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </TableComponent>
  </div>
</template>

<script setup lang="ts">
import TableComponent from '@/base-ui/tabel/src/TableComponent.vue'
import { contentTableType } from '@/base-ui/tabel/types/index'
import { usePermission } from '@/hooks/usePermissionEffect'
import { UserInfo } from '@/service/login/types'
import { useSystemStore } from '@/store/main/index'
import { computed, getCurrentInstance, PropType, ref, watchEffect } from 'vue'
const props = defineProps({
  contentTableConfig: {
    type: Object as PropType<contentTableType>,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})
// 获取操作的权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isQuery = usePermission(props.pageName, 'query')
const isDelete = usePermission(props.pageName, 'delete')
// 转换时间
const $filter = getCurrentInstance()?.appContext.config.globalProperties.$filters
// 双向绑定pageInfo
const pageInfo = ref({
  // 当前页面
  currentPage: 1,
  //  一页的内容条数
  pageSize: 10
})
const systemStore = useSystemStore()
// 发送网络请求获取userList
const getPageData = (queryInfo: any = {}) => {
  // 没有查询权限直接停止
  if (!isQuery) return

  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
watchEffect(() => {
  getPageData()
})

const dataList = computed(() => systemStore.pageListData(props.pageName))
const dataCount = computed(() => systemStore.pageListCount(props.pageName) || dataList.value.length)

// 获取其他的动态插槽名
const otherPropSlots = props.contentTableConfig.propsList.filter((item) => {
  switch (item.slotName) {
    case 'status':
      return false
    case 'createAt':
      return false
    case 'handler':
      return false
    case 'updateAt':
      return false
    default:
      return true
  }
})
const emit = defineEmits(['newBtnClick', 'editBtnClick'])
// 删除操作
const handleDeleteClick = (item: UserInfo) => {
  systemStore.deletePageData({ pageName: props.pageName, id: item.id })
}
// 新建
const handleNewClick = () => {
  emit('newBtnClick')
}
// 编辑
const handleEditClick = (item: UserInfo) => {
  emit('editBtnClick', item)
}
defineExpose({
  getPageData
})
</script>
<style scoped>
.pageContent {
  padding: 20px;
  border-radius: 20px;
}
</style>
