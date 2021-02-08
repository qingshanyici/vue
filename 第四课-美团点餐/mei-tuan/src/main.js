// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.default.baseUrl = 'http://localhost:3000'
// axios.default.headers = ['Content-Type'] = 'applictaion/josn'
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
