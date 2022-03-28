import { IForm } from '@/base-ui/form/index'
import { List } from '@/service/main/system/types'
export const searchformConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        { title: '启用', value: '启用' },
        { title: '禁用', value: '禁用' }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '商品列表',
  propsList: [
    { prop: 'name', label: '商品名', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '100', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '100' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '180', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  selectionChange: (value: List) => {
    console.log(value)
  }
}
