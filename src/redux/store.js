import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import modalReducer from "./modalReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    modalBlock: modalReducer,
    navBar: navbarReducer
});

let store = createStore(reducers);

export default store;