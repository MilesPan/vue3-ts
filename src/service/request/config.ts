// 1.手动注释
// const BASE_URL = 'http://pdy.org/dev'
// const BASE_NAME = 'pdy'

// const BASE_URL = 'http://pdy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://pdy.org/test'
// const BASE_NAME = 'james '

// 2.根据process.env.NODE_ENV
let BASE_URL = ''
const TIME_OUT = 10000
if (import.meta.env.MODE === 'development') {
  BASE_URL = '/api'
}
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.ort/prod'
}
export { BASE_URL, TIME_OUT }
