import Vue from 'vue';
import Router from 'vue-router';

import Index from '../view/index';
import InsuranceHeader from '../view/header';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        header: InsuranceHeader,
      },
    },
  ],
});
