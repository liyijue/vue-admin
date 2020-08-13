import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Aside_Collapse: false
  },
  mutations: {
    changeAsideCollapse(state) {
      state.Aside_Collapse = !state.Aside_Collapse
    }
  },
  actions: {},
  modules: {}
})
