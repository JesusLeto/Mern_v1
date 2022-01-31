import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
import {useStore} from "vuex-simple";
import router from "./router";
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.prototype.$vclStore = useStore(store)
Vue.use(VueRouter)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
