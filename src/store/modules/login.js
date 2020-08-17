import { POSTRegister, POSTLogin, POSTGetKeycode } from '../../api/login'

const state = {}

const getters = {}

const mutations = {}

const actions = {
  // 获取验证码
  async POSTGetKeycode(_, { payload, callback }) {
    try {
      const resData = await POSTGetKeycode(payload)
      callback(resData)
    } catch (error) {
      Error(error)
    }
  },
  // 登录
  async POSTLogin(_, { payload, callback }) {
    try {
      const resData = await POSTLogin(payload)
      callback(resData)
    } catch (error) {
      Error(error)
    }
  },
  // 注册
  async POSTRegister(_, { payload, callback }) {
    const resData = await POSTRegister(payload)
    if (resData.resCode === 0) {
      callback(resData)
    } else {
      Error(resData.error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
