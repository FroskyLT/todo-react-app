import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import modalReducer from "./modalReducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    modalBlock: modalReducer
});

let store = createStore(reducers);

export default store;