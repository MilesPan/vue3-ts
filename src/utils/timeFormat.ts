const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
// 使用dayjs库
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export function formatUtcTime(utcTime: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcTime).utcOffset(8).format(format)
}

// 时间戳转换成时间格式
export function formatTimeStamp(timeStamp: number, format: string = DATE_TIME_FORMAT) {
  return dayjs(timeStamp).format(format)
}
