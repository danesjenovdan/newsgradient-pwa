export const state = () => ({
  windowWidth: 3
})

export const mutations = {
  SET_WIDTH(state, payload) {
    state.windowWidth = payload
  }
}
