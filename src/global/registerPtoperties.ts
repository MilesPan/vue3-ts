import { App } from 'vue'
import { formatUtcTime } from '@/utils/timeFormat'
export function registerProperties(app: App) {
  // 过滤的全局方法

  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcTime(value)
    }
  }
}
