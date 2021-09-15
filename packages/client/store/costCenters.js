export const state = () => ({
  costCenters: []
})

export const getters = {
  get: state => state.costCenters,

  getById: state => id => state.costCenters.filter(exercise =>
    exercise.id === id
  )[0]
}

export const mutations = {
  set (state, costCenters) {
    state.costCenters = costCenters
  }
}

export const actions = {
  async fetch ({ commit }) {
    const data = await this.$axios.$get('/cost-centers')
    commit('set', data)
  },

  async create (_context, data) {
    return await this.$axios.$post('/cost-centers', data)
  },

  async update (_context, payload) {
    return await this.$axios.$patch(`/cost-centers/${payload.id}`, payload.data)
  },

  async delete ({ dispatch }, id) {
    await this.$axios.$delete(`/cost-centers/${id}`)
    dispatch('fetch')
  }
}
