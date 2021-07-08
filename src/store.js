import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    influencers: [],
    fields: []
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    },
    setFields (state, fields) {
      state.fields = fields
    },
    setInfluencers (state, influencers) {
        state.influencers = influencers
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      return client
        .fetchPosts()
        .then(posts => commit('setPosts', posts))
    },
    fetchFields ({ commit }) {
      return client
        .fetchFields()
        .then(fields => commit('setFields', fields))
    },
    fetchInfluencers ({ commit }) {
      console.log('getInfluencers')
      return client
        .fetchInfluencers()
        .then(influencers => commit('setInfluencers', influencers))
    }
  }
})