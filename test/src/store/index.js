/**
 * 在vue中使用vuex
 * Created by tianrenjie on 2018/7/19
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import filter from './modules/filter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    apollo: {
      namespaced: true,
      modules: {
        index,
        filter,
      },
    },
  },
});
