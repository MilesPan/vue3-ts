import axios from 'axios'

// axios就是一个实例对象
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

//aixos基本配置
// 全局配置
// 1.默认地址
// axios.defaults.baseURL = 'http://httpbin.org'
// 2.超时时间,超时放弃请求
axios.defaults.timeout = 10000

// 单独配置
axios
  .get('/get', {
    params: {
      name: 'pdy',
      age: 18
    }
  })
  .then((res) => {
    return res
  })
axios
  .post('/post', {
    data: {
      name: 'pdy',
      age: 19
    }
  })
  .then((res) => {
    return res
  })

// all，多个请求等到都请求完成再返回
axios
  .all([
    axios.get('/get', { params: { name: 'pdy', age: '13' } }),
    axios.post('/post', { params: { name: 'pdy', age: '19' } })
  ])
  .then((res) => {
    return res
  })

// 拦截器

//拦截请求
// fn1,请求发送成功执行的函数
// fn2,请求发送失败执行的函数
// axios.interceptors.request.use(fn1, fn2)
// axios.interceptors.response.use(fn1, fn2)
axios.interceptors.request.use(
  (config) => {
    // do what you want
    // 1.给请求添加token,
    // 2.使用loading动画
    return config
  },
  (err) => {
    return err
  }
)
// 拦截响应
// fn1,响应成功执行的函数
// fn2,响应失败执行的函数
// axios.interceptors.request.use(fn1, fn2)
// axios.interceptors.response.use(fn1, fn2)

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return err
  }
)
