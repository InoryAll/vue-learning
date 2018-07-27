/**
 * vuex数据相关
 */
import { getDataListApi } from '../../api/index';

// 初始状态
const initState = {
  code: undefined,
  data: [],
  filterType: '',
  filterValue: '',
};

// 用于过滤数据
const getters = {
  filterDataList: state => state,
};

// 相当于reducer，用于数据存储
const mutations = {
  getDataList(state, payload) {
    state.code = payload.dataList.code;
    state.data = payload.dataList.data;
  },
  filter(state, payload) {
    state.filterType = payload.filterType;
    state.filterValue = payload.filterValue;
  },
};

const actions = {
  getDataListAction({ commit }, payload) {
    getDataListApi({ ...payload }, (data) => {
      commit({
        type: 'getDataList',
        dataList: data,
      });
    }, (err) => {
      console.log(err);
    });
  },
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
