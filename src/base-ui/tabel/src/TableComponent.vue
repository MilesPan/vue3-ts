<template>
  <div class="tableComponent">
    <div class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      v-bind="childrenProps"
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        min-width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        min-width="100"
      ></el-table-column>
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column
          class="table-column"
          :show-overflow-tooltip="true"
          :prop="propItem.prop"
          :label="propItem.label"
          :min-width="propItem.minWidth"
          align="center"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="pageConfig.currentPage"
          v-model:page-size="pageConfig.pageSize"
          :page-sizes="[10, 20, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPropsList } from '@/base-ui/tabel/index'
import { IPageType } from '../types/index'
import { List } from '@/service/main/system/types'
import { PropType, reactive, ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  listData: {
    type: Array as PropType<any[]>,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propsList: {
    type: Array as PropType<IPropsList[]>,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object as PropType<IPageType>,
    default: () => ({ currentPage: 1, pageSzie: 10 })
  },
  // 折叠子菜单
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (value: List) => {
  emit('selectionChange', value)
}
const pageConfig = reactive(props.page)
console.log(pageConfig)

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (pageSize: number) => {
  console.log(pageSize)
  emit('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  console.log(currentPage)

  emit('update:page', { ...props.page, currentPage })
}
</script>

<style scoped lang="less">
.tableComponent {
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 20px;
  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }
  .el-table :deep(.el-table__cell) {
    z-index: auto !important;
  }

  .footer {
    margin-top: 15px;

    .el-pagination {
      text-align: right;
    }
  }
}
</style>
