const state = {
  Aside_Collapse: JSON.parse(sessionStorage.getItem('Aside_Collapse')) || false
}

const getters = {}

const mutations = {
  changeAsideCollapse(state) {
    state.Aside_Collapse = !state.Aside_Collapse
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
