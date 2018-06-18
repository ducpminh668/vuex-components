export default {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  getters: {
    isLoggedIn(state, getters, rootState, rootGetters) {
      return state.isLoggedIn
    }
  },
  actions: {
    login({ commit, state, rootState,rootGetters }) {
      if (rootGetters.isBanned) {
        state.isLoggedIn = true
        commit('login', {name: 'ducpminh'}, {root: false})
      } else {
        alert('Get outa here!')
      }
    },
    logout({ state, commit }, rootState) {
      state.isLoggedIn = false
      commit('logout')
    }
  },
  mutations: {
    login(state, payload) {
      console.log('lgoin user', payload)
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    }
  }
}
