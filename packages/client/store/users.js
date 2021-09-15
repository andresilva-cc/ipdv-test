export const state = () => ({
  users: []
})

export const getters = {
  get: state => state.users,

  getById: state => id => state.users.filter(user =>
    user.id === id
  )[0]
}

export const mutations = {
  set (state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch ({ commit }) {
    const data = await this.$axios.$get('/users')
    commit('set', data)
  },

  async create (_context, data) {
    return await this.$axios.$post('/users', data)
  },

  async update (_context, payload) {
    return await this.$axios.$patch(`/users/${payload.id}`, payload.data)
  },

  async delete ({ dispatch }, id) {
    await this.$axios.$delete(`/users/${id}`)
    dispatch('fetch')
  }
}
