export const state = () => ({
  positions: []
})

export const getters = {
  get: state => state.positions,

  getById: state => id => state.positions.filter(position =>
    position.id === id
  )[0]
}

export const mutations = {
  set (state, positions) {
    state.positions = positions
  }
}

export const actions = {
  async fetch ({ commit }) {
    const data = await this.$axios.$get('/positions')
    commit('set', data)
  },

  async create (_context, data) {
    return await this.$axios.$post('/positions', data)
  },

  async update (_context, payload) {
    return await this.$axios.$patch(`/positions/${payload.id}`, payload.data)
  },

  async delete ({ dispatch }, id) {
    await this.$axios.$delete(`/positions/${id}`)
    dispatch('fetch')
  }
}
