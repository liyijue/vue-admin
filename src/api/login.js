import service from '@/utils/service'

// 登录功能
export const getLogin = () => {
  service
    .request({
      method: 'GET',
      url: '/user?ID=12345'
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
