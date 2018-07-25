// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueScrollBehavior from 'vue-scroll-behavior';
import App from './App';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

// 转到一个新页面时，定位到最顶端
Vue.use(vueScrollBehavior, { router });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
