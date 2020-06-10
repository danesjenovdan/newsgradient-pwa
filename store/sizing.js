export const state = () => ({
  windowWidth: window.innerWidth
})

export const mutations = {
  SET_WIDTH(state, payload) {
    state.windowWidth = payload
  }
}
