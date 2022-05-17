import { UserInfo } from '@/service/login/types'
import { ref } from 'vue'
import pageModal from '@/components/pageModal/index'
type CallbackType = (item?: any) => void
export function usePageModal(newCb?: CallbackType, editCb?: CallbackType) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  // 点击新建
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // 新建時显示密码栏
    newCb && newCb()
  }
  // 点击编辑
  const handleEditData = (item: UserInfo) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }

    // 编辑时不显示密码栏
    editCb && editCb(item)
  }
  return { pageModalRef, defaultInfo, handleNewData, handleEditData }
}
