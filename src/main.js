import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/css/reset.css'
import './assets/css/iconfont.css'

import FastClick from 'fastclick'
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
