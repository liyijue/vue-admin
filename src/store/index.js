import Vue from 'vue'
import Vuex from 'vuex'

import aside from './modules/aside'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aside,
    login
  }
})
