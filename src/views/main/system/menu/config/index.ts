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
const contentTableConfig = {
  // 展示序号
  showIndexColumn: false,
  // 展示选择
  showSelectColumn: false,
  showFooter: false,
  // 展示折叠菜单
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  title: '菜单列表',
  propsList: [
    { prop: 'name', label: '菜单名称', minWidth: '120' },
    { prop: 'type', label: '类型', minWidth: '80' },
    { prop: 'url', label: '路劲', minWidth: '180' },
    { prop: 'icon', label: '菜单icon', minWidth: '120' },
    { prop: 'premission', label: '按钮权限', minWidth: '130' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' }
    // { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  selectionChange: (value: List) => {
    console.log(value)
  }
}
export default contentTableConfig
