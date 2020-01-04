import {combineReducers, createStore} from "redux";
import postDataReducer from "./postData_reducer";
import casesReduser from "./Cases_reduser";
import profilePageReducer from "./profilePage_reduser.js";
import authReducer from "./auth_reduser";

let reducers = combineReducers({
    postPage: postDataReducer,
    usersPage: casesReduser,
    profilePage: profilePageReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;