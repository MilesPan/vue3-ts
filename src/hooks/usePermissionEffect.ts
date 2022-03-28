import { useLoginStore } from '@/store'

// 找到某个权限
export function usePermission(pageName: string, handleName: string) {
  const permission = useLoginStore().permissions
  const verifyPermission = `system${pageName}:${handleName}`
  // 在store的permission中找某个操作，看有没有权限
  // 要返回一个bool值
  return !!permission.find((item) => item.indexOf(verifyPermission))
}
