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

// 按照筛选值对数据过滤并返回
const handleSortFilter = (origin, filterValue) => {
  const clonedOrigin = [];
  origin.map(val => clonedOrigin.push(val));
  switch (filterValue) {
    case '1':
    case '2':
      return origin;
    case '3':
      // eslint-disable-next-line
      return origin.sort((pre, next) => {
        return parseFloat(pre.price) > parseFloat(next.price);
      });
    case '4':
      // eslint-disable-next-line
      return origin.sort((pre, next) => {
        return parseFloat(pre.price) < parseFloat(next.price);
      });
    default:
      return origin;
  }
};


// 筛选过滤类型
const doFilterData = (origin, filterType, filterValue) => {
  switch (filterType) {
    case 'sort':
      return handleSortFilter(origin, filterValue);
    default:
      return origin;
  }
};

// 用于过滤数据
const getters = {
  filterDataList: state => doFilterData(state.data, state.filterType, state.filterValue),
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
      console.log(data);
      commit({
        type: 'getDataList',
        dataList: data,
      });
    }, (err) => {
      console.log(err);
    });
  },
  doFilter({ commit, state }, payload) {
    // actions.getDataListAction({ commit }, payload);
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
