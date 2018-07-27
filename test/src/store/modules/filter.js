const initState = {
  filterType: '',
  filterValue: '',
};

const doFilterData = (origin, filterType, filterValue) => {
  // console.log(origin);
};

const getters = {
  filterData: (state) => {
    doFilterData(state);
  },
};

const mutations = {
  filter(state, payload) {
    state.filterType = payload.filterType;
    state.filterValue = payload.filterValue;
  },
};

const actions = {
  doFilter({ commit, state }, payload) {
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
