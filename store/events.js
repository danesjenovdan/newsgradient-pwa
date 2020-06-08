import { API } from '../api'
import { TIMERANGE } from '../constants'

export const state = () => ({
  topEvents: [],
  articles: {},
  timerange: TIMERANGE.TODAY
})

export const mutations = {
  SET_TOP_EVENTS(state, payload) {
    state.topEvents = payload
  },
  SET_ARTICLES(state, payload) {
    state.articles = payload
  },
  SET_TIMERANGE(state, payload) {
    state.timerange = payload
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
  async getEventArticles(context, { eventId }) {
    try {
      // debugger
      const url = API.news.articles + eventId + '/'
      const response = await this.$axios.get(url)
      const data = response.data
      const result = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
      }
      data.forEach((article) => {
        result[parseInt(article.medium.slant)].push(article)
      })
      context.commit('SET_ARTICLES', result)
    } catch (e) {}
  },
  setTimerange(context, payload) {
    context.commit('SET_TIMERANGE', payload)
  }
}
