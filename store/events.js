export const state = () => ({
  topEvents: []
})

export const mutations = {
  SET_TOP_EVENTS(state, payload) {
    state.topEvents = payload
  }
}

export const actions = {
  async getTopEvents(context) {
    try {
      const response = await this.$axios.get('/api/v1/news/top-events/')
      context.commit('SET_TOP_EVENTS', response.data)
    } catch (e) {}
  }
}
