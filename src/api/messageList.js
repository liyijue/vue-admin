import service from '@/utils/service'

export async function fetchMessageList(params) {
  return service.request({
    method: 'POST',
    url: '/user/getList/',
    data: {
      ...params
    }
  })
}
