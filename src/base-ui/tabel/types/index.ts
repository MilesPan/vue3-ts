export interface IPropsList {
  prop: string
  label: string
  minWidth: string
  slotName?: string
}

export interface contentTableType {
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  title: string
  propsList: any[]
  selectionChange?: any
}
export interface IPageType {
  currentPage: number
  pageSize: number
}
