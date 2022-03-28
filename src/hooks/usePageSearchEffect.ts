import { ref } from 'vue'
import pageContent from '@/components/pageContent/src/pageContent.vue'
// 不让程序飘红，其实有没有都无所谓
interface pageContentRef extends InstanceType<typeof pageContent> {
  getPageData: (queryInfo?: any) => void
}
export function usePageSearch() {
  const pageContentRef = ref<pageContentRef>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return { handleResetClick, handleQueryClick, pageContentRef }
}
