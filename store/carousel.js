export const state = () => ({
  selectedItem: 3
})

export const mutations = {
  SET_ITEM(state, payload) {
    state.selectedItem = payload
  },
  DECREMENT_ITEM(state) {
    if (state.selectedItem >= 2) {
      state.selectedItem--
    }
  },
  INCREMENT_ITEM(state) {
    if (state.selectedItem <= 4) {
      state.selectedItem++
    }
  }
}
