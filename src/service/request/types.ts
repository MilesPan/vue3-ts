/**
 * ts类型文件
 */
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

// 拦截器接口
interface MyRequestInterceptors<T = AxiosResponse> {
  // 拦截器
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
// 1.让MyRequestConfig继承Axios定义的类型
// 2.在MyRequestConfig中拓展一个MyRequestInterceptors类型
interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyRequestInterceptors<T>
  showLoading?: boolean
}
export { MyRequestConfig, MyRequestInterceptors }
