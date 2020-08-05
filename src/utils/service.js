import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function({ data }) {
    // 对响应数据做点什么
    if (data.resCode !== 0) {
      Message.error(data.message)
      return data
    }

    return data
  },
  function(error) {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default service
