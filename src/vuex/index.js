import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: true,
    overlayMenu: false,
    showVideo: false,
  },
  mutations: {
    showMenu (state, value) {
      state.showMenu = Boolean(value)
    },
    overlayMenu (state, value) {
      state.overlayMenu = Boolean(value)
    },
    showVideo (state, value) {
      state.showVideo = Boolean(value)
    },
  },
})
