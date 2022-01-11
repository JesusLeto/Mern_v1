import {Schema, model} from "mongoose";

const User = new Schema({
    title: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String}
})

export default model('User', User)