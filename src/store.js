import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {},
    establishment: {},
    establishments: {
      items: []
    }
  },
  mutations: {
    setProfile (state, payload) {
      state.profile = payload
    },
    setActiveEstablishment (state, payload) {
      state.establishment = payload
    },
    setEstablishments (state, payload) {
      state.establishments = payload
    }
  },
  actions: {
    setProfile ({ commit }, payload) {
      commit('setProfile', payload)
    },
    setActiveEstablishment ({ commit }, payload) {
      commit('setActiveEstablishment', payload)
    },
    setEstablishments ({ commit }, payload) {
      commit('setEstablishments', payload)
    }
  }
})
