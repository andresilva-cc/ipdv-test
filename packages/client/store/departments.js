export const state = () => ({
  departments: []
})

export const getters = {
  get: state => state.departments,

  getById: state => id => state.departments.filter(department =>
    department.id === id
  )[0]
}

export const mutations = {
  set (state, departments) {
    state.departments = departments
  }
}

export const actions = {
  async fetch ({ commit }) {
    const data = await this.$axios.$get('/departments')
    commit('set', data)
  },

  async create (_context, data) {
    return await this.$axios.$post('/departments', data)
  },

  async update (_context, payload) {
    return await this.$axios.$patch(`/departments/${payload.id}`, payload.data)
  },

  async delete ({ dispatch }, id) {
    await this.$axios.$delete(`/departments/${id}`)
    dispatch('fetch')
  }
}
