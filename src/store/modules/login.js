import { POSTRegister, POSTLogin } from '../../api/login'

const state = {}

const getters = {}

const mutations = {}

const actions = {
  async POSTLogin(_, { payload, callback }) {
    try {
      const resData = await POSTLogin(payload)
      callback(resData)
    } catch (error) {
      Error(error)
    }
  },
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
