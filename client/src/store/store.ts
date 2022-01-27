import {Module, State} from "vuex-simple";
import {userModule} from "./modules/user";

export default class rootStore {
    @Module()
    public user = new userModule()
}