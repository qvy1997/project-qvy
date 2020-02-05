import Vue from 'vue'
import App from './App'
import router from './router'
import './buefy'
import './assets/css/main.css'
import './assets/css/fonts.css'
import './veevalidate'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
