import {combineReducers, createStore} from "redux";
import {postDataReducer} from "./postData_reducer";

let reducersBatch = combineReducers({
    postData: postDataReducer,
});

let store = createStore(reducersBatch);



export default store;