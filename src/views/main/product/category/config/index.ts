import { IForm } from '@/base-ui/form'
export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '商品列表',
  propsList: [
    { prop: 'id', label: 'id', minWidth: '180' },
    { prop: 'name', label: '类别', minWidth: '180' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
export const searchformConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别',
      placeholder: '请输入商品类别'
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入商品id'
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
    }
  ],
  itemStyle: { padding: '10px 40px' }
}
// 新建弹窗配置
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '类别',
      type: 'input',
      placeholder: '请输入类别'
    }
  ],
  colLayout: {
    span: 24
  }
}
