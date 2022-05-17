import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
import { MyRequestConfig, MyRequestInterceptors } from './types'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import 'element-plus/theme-chalk/el-loading.css'

const DEFAULT_LOADING = true
class MyRequest {
  // axios提供了实例的类型
  instance: AxiosInstance
  interceptors?: MyRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean
  constructor(config: MyRequestConfig) {
    // 创建一个axios实例
    this.instance = axios.create(config)

    // 保存一些基本信息
    // 是否需要loading
    this.showLoading = config.showLoading ?? DEFAULT_LOADING //前面的值为undefined或null则取后面的值
    // 拦截器
    this.interceptors = config.interceptors

    // 使用只属于实例的两个拦截器，config中拿到的
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 使用只属于实例的两个拦截器，config中拿到的
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所以实例都会有的拦截器，全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 请求的时候显示loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据中',
            background: 'rgba(0,0,0,0.5)'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 响应后移除loading
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        // const data = res.data
        // if (data.returnCode === '-1001') {
        //   console.log('请求失败,错误信息')
        // } else {
        return res
        // }
      },
      (err) => {
        if (err.response.state === 404) {
          return err
        }
      }
    )
  }

  // 封装request请求
  request<T>(config: MyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.为request方法加两个单独的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否需要loading
      // showloading：false
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      // axios实例有request方法，可以自行配置请求相关配置
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.每次请求完成后，将showloading又设置为true，这样不会影响下一次请求
          this.showLoading = DEFAULT_LOADING

          //3.返回结果
          resolve(res)
        })
        .catch((err) => {
          // 错误也要将showloading又设置为true，这样不会影响下一次请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default MyRequest
