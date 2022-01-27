import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
import {useStore} from "vuex-simple";

Vue.config.productionTip = false
Vue.prototype.$vclStore = useStore(store)


new Vue({
  render: h => h(App)
}).$mount('#app')
