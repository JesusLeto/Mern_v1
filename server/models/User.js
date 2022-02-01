import mongo from "mongoose";

const User = new mongo.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    avatar: {type: String}
})

export default mongo.model('User', User)