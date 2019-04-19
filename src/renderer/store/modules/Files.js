const state = {
  files: []
}

const actions = {
  ADD_FILES ({commit}, name) {
    commit('ADD_FILES', name)
  }
}

const mutations = {
  ADD_FILES (state, name) {
    state.files = [...state.files, name]
  }
}

export default {
  state,
  actions,
  mutations
}
