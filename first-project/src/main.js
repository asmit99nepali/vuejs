import Vue from 'vue'
import App from './App.vue'
import Asmit from './Asmit.vue'
Vue.component('asmit',Asmit);
new Vue({
  el: '#app',
  render: h => h(App)
})
