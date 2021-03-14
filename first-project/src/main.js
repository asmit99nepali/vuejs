import Vue from 'vue'
import App from './App.vue'
import Asmit from './Asmit.vue'
Vue.component('asmit',Asmit);

// Event Bus
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
