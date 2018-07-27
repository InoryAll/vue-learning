const initState = {
  filterType: '',
  filterValue: '',
};

const getters = {
  filterData: (state) => {
    switch (state.filterType) {
      default:
        return state;
    }
  },
};

const mutations = {
  filter(state, payload) {
    return { ...state, ...payload };
  },
};

const actions = {
  doFilter({ commit }, payload) {
    commit({
      type: 'filter',
      ...payload,
    });
  },
};

export default {
  state: initState,
  getters,
  mutations,
  actions,
};
