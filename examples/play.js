import Vue from 'vue';
import Var from 'main/index.js';
import App from './play/index.vue';
import '~/theme-chalk/src/index.scss';

Vue.use(Var);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
