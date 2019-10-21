import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    config: null,
    system: null,
    user: null,
    showShare: false,
    shareObject: {},
    menu: {},
}
const mutations = {
    setConfig(state, data) {
        return (state.config = data)
    },
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
    },
    setMenu(state, res) {
        for (let key in res) {
            state.menu[key] = res[key]
        }
        return true
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions: {}
})
