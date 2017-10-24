import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

Vue.component('HeaderTitle', () => import('@/components/HeaderTitle'))
Vue.component('BigTitle', () => import('@/components/BigTitle'))
Vue.component('FigureBox', () => import('@/components/FigureBox'))
Vue.component('Box', () => import('@/components/Box'))

require('./bootstrap.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
