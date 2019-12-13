import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '', // process.env.BASE_API,
  interceptors: true // 是否开启response拦截器
  /*   timeout: 5000 // 请求超时时间 */

})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
   console.log(res)
    if (!response.config.interceptors || res.code === '0') {
      return response.data
    }
    return response;
  },
  error => {

    return Promise.reject(error)
  }
)

export default service
