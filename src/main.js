import Vue from 'vue'
import App from './App'
import router from './router'

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
  data () {
    return {}
  },
  render: h => h(App),
})
