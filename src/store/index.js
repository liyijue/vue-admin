import Vue from 'vue'
import Vuex from 'vuex'

import aside from './modules/aside'
import login from './modules/login'
import messageList from './modules/messageList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aside,
    login,
    messageList
  }
})
