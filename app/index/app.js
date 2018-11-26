import Vue from 'vue';

import store from './store/index';

import Index from './views/index';

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad);
// 引入路由
import router from './router';

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'static/picture/error.png',
  loading: 'static/picture/loading.gif',
  attempt: 1
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(Index)
});