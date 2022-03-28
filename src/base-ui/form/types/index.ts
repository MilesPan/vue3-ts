type IFormType = 'input' | 'password' | 'select' | 'datepicker'
interface optionsType {
  title: string
  value: string | number
}
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rule?: any[]
  placeholder?: any
  // 针对select
  options?: optionsType[]
  // 针对特殊属性
  otherOptions?: any
  isHidden?: boolean
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
