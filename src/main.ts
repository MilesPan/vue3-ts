import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as ElIcons from '@element-plus/icons'
import registerGlobal from './global'
const app = createApp(App)
const pinia = createPinia()
// 全局注册element-plus icon图标组件
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name])
}

app.use(pinia)
registerGlobal(app)
import myRequest from '@/service'

// myRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的res')
//       return res
//     }
//   }
// })
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// myRequest
//   .get<DataType>({
//     url: '/home/multidata',

//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
