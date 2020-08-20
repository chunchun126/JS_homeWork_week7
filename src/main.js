import Vue from 'vue';
// 驗證套件
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
// 規則檔案（ex: email...）
import * as rules from 'vee-validate/dist/rules';
// 語系檔案
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
// bootstrap
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
// jquery
import jquery from 'jquery';
// AXIOS
import axios from 'axios';
import VueAxios from 'vue-axios';
// loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// bus
import './bus';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 元件，全域註冊
Vue.component('Loading', Loading);

// 驗證套件
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);

// 註冊全域變數：window 加上 $ 這個變數，並指向 jquery 套件
// 全域註冊完 仍需在 區域元件上補上 /* global $ */
window.$ = jquery;

// 加入到原型內
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
