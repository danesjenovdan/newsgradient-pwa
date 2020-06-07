import { API } from '../api'

export const state = () => ({
  topEvents: [],
  articles: []
})

export const mutations = {
  SET_TOP_EVENTS(state, payload) {
    state.topEvents = payload
  },
  SET_ARTICLES(state, payload) {
    state.articles = payload
  }
}

export const actions = {
  async getTopEvents(context, payload = {}) {
    try {
      // debugger
      let url = API.news.topEvents
      const qp = {}
      if (payload.timerange) {
        qp.timerange = payload.timerange
      }
      if (payload.slant) {
        qp.slant = payload.slant
      }
      const params = new URLSearchParams(qp).toString()
      if (params) {
        url += '?' + params
      }

      const response = await this.$axios.get(url)
      context.commit('SET_TOP_EVENTS', response.data)
    } catch (e) {}
  },
  async getEventArticles(context, payload = {}) {
    try {
      // debugger
      const url = API.news.topEvents + payload.eventId + '/'
      const response = await this.$axios.get(url)
      context.commit('SET_ARTICLES', response.data)
    } catch (e) {}
  }
}
