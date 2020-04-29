import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';
import VueMatomo from 'vue-matomo';

Vue.use(Vue2TouchEvents, {
  swipeTolerance: 100,
});

Vue.use(VueMatomo, {
  host: 'https://track.djnd.si',
  siteId: 10,
  router,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
