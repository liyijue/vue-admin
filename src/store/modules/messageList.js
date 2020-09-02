import { fetchMessageList } from '../../api/messageList'

const state = {
  messageList: {}
}

const getters = {}

const mutations = {
  Set_State(state, { payload }) {
    state = Object.assign(state, payload)
  }
}

const actions = {
  async FetchMessageList(
    { commit },
    { payload = { pageSize: 10, pageNumber: 1 } }
  ) {
    try {
      const data = await fetchMessageList(payload)
      commit({
        type: 'Set_State',
        payload: {
          messageList: data
        }
      })
    } catch (error) {
      Error(error)
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
