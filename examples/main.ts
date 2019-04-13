import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import SideNav from './components/side-nav.vue';
import FooterNav from './components/footer-nav.vue';

Vue.config.productionTip = false;

import '~/theme-chalk/src/index.scss';
import './demo-styles/index.scss';
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';

Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
