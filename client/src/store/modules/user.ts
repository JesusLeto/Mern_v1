import {Mutation, State, Getter, Action} from "vuex-simple";
import userInterface from '../dep/user'
import axios from "axios";

export class userModule {
    @State()
    private currentUser: userInterface;

    constructor(cU: userInterface = {
        name: "",
        email: "",
        errorAuth: "",
        isAuth: false
    }) {
        this.currentUser = cU
    }

    @Mutation()
    public newCurrentUser(nU: userInterface) {
        this.currentUser = nU
    }

    @Mutation()
    public authError(textError: string) {
        this.currentUser.errorAuth = textError
    }

    @Action()
    public async RegisterNewUser(checkUser: userInterface) {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", checkUser);
            if(response.status === 200){
                this.currentUser.isAuth = true
                this.currentUser.errorAuth = ""
            }
        } catch (error) {
            this.authError(error.response.data.message)
        }
    }

    @Getter()
    public get getCurrentUser(){
        return this.currentUser
    }
}