import service from '@/utils/service'

// 登录功能
export const getKeycode = () => {
  return service.request({
    method: 'POST',
    url: '/getSms/'
  })
}
