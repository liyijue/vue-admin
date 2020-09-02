import service from '@/utils/service'

export async function fetchMessageList(params) {
  return service.request({
    type: 'POST',
    url: '/user/getList/',
    data: {
      ...params
    }
  })
}
