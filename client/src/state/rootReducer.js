import {createStore} from "redux";
import {combineReducers, applyMiddleware} from "redux";
import {userReducer} from "./userReducer";
import {fileReducer} from "./fileReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
    file: fileReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))