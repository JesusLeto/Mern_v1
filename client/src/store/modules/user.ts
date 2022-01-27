import {Mutation, State, Getter} from "vuex-simple";
import userInterface from '../dep/user'

export class userModule {
    @State()
    private currentUser: userInterface;

    constructor(cU: userInterface = {
        name: "",
        email: "",
        password: ""
    }) {
        this.currentUser = cU
    }

    @Mutation()
    public newCurrentUser(nU: userInterface) {
        this.currentUser = nU
    }

    @Getter()
    public get getCurrentUser(){
        return this.currentUser
    }
}