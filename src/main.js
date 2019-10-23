import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {config} from './config';

Vue.config.productionTip = false;

WorkatoApi.configure({
  pathPrefix: config.workatoRoutesPrefix
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
