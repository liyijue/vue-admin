import service from '@/utils/service'

// 获取注册的验证码
export const POSTGetKeycode = params => {
  return service.request({
    method: 'POST',
    url: '/getSms/',
    data: {
      ...params
    }
  })
}

// 注册功能
export const POSTRegister = params => {
  return service.request({
    method: 'POST',
    url: '/register/',
    data: {
      ...params
    }
  })
}

// 登录功能
export const POSTLogin = params => {
  return service.request({
    method: 'POST',
    url: '/login/',
    data: {
      ...params
    }
  })
}
