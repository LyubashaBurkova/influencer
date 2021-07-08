import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    influencers: []
  },
  mutations: {
    setInfluencers (state, influencers) {
        state.influencers = influencers
    }
  },
  actions: {
    fetchInfluencers ({ commit }) {
      return client
        .fetchInfluencers()
        .then(influencers => commit('setInfluencers', influencers))
    }
  }
})