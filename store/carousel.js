export const state = () => ({
  selectedSlant: 3
})

export const mutations = {
  SET_SLANT(state, payload) {
    state.selectedSlant = payload
  },
  DECREMENT_ITEM(state) {
    if (state.selectedSlant >= 2) {
      state.selectedSlant--
    }
  },
  INCREMENT_ITEM(state) {
    if (state.selectedSlant <= 4) {
      state.selectedSlant++
    }
  }
}

export const actions = {
  setSlant({ commit }, slant) {
    commit('SET_SLANT', slant)
  }
}
