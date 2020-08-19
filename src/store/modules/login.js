import { POSTRegister, POSTLogin, POSTGetKeycode } from '../../api/login'
import cookie from 'cookiejs'

const state = {
  token: '',
  username: ''
}

const getters = {
  GET_TOKEN: state => state.token,
  GET_USERNAME: state => state.username
}

const mutations = {
  Set_State(state, { payload }) {
    state = Object.assign(state, payload)
  }
}

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
  async POSTLogin({ commit }, { payload, callback }) {
    try {
      const resData = await POSTLogin(payload)
      const { data } = resData
      if (!cookie.get('token')) {
        cookie.set('token', data?.token)
      }
      commit({
        type: 'Set_State',
        payload: {
          ...data
        }
      })
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
