import { IForm } from '@/base-ui/form'
export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表',
  propsList: [
    { prop: 'id', label: '部门id', minWidth: '180' },
    { prop: 'name', label: '部门名称', minWidth: '180' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
    { prop: 'leader', label: '部门领导', minWidth: '180', slotName: 'operation' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
export const searchformConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建日期',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门管理',
      placeholder: '请输入部门管理人'
    }
  ]
}
// 新建弹窗配置
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '隶属部门',
      placeholder: '请输入部门领导',
      options: [
        {
          title: '1',
          value: 1
        },
        {
          title: '2',
          value: 2
        }
      ]
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
