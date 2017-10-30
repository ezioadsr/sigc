import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

/** MODULES */
import dashboard from 'src/app/dashboard/store'
import auth from 'src/app/auth/store'

Vue.use(Vuex)

const modules = {
  auth,
  dashboard
}

console.log(auth)

export default new Vuex.Store({
  namespaced: false,
  modules,
  state,
  mutations,
  getters,
  actions
})
