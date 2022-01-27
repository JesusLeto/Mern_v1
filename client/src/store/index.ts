import {createVuexStore} from "vuex-simple";
import RootStore from "./store";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
const instance = new RootStore()
export default createVuexStore(instance)