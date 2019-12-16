import {combineReducers, createStore} from "redux";
import postDataReducer from "./postData_reducer";
import casesReduser from "./Cases_reduser";

let reducers = combineReducers({
    postPage: postDataReducer,
    usersPage: casesReduser
});

let store = createStore(reducers);

window.store = store;

export default store;