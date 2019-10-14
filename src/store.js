import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  system: null,
  user: null,
  showShare: false,
  shareObject: {}
}
const mutations = {
  setSystem(state, data) {
    return (state.system = data)
  },
  setUser(state, data) {
    return (state.user = data)
  },
  openShare(state) {
    return (state.showShare = true)
  },
  closeShare(state) {
    return (state.showShare = false)
  },
  setShareObject(state, res) {
    return (state.shareObject = res)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
})
