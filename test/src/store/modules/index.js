/**
 * vuex数据相关
 */
import { getDataListApi } from '../../api/index';

// 初始状态
const initState = {
  code: undefined,
  data: [],
};

// 用于过滤数据
const getters = {
  filterDataList: state => state,
};

// 相当于reducer，用于数据存储
const mutations = {
  getDataList(state, payload) {
    return { ...state, ...payload };
  },
};

const actions = {
  getDataListAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getDataListApi({ ...payload }, (data) => {
        console.log(data);
        commit({
          type: 'getDataList',
          data: data.dataList,
        });
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  },
};


export default {
  state: initState,
  getters,
  mutations,
  actions,
};
