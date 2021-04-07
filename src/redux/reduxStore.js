import {combineReducers, createStore} from "redux";
import {listReducer} from "./listReducer";
import {filterReducer} from "./filterReducer";


let redusers = combineReducers({
    mainPage: listReducer,
    filter: filterReducer
})

export let store = createStore(redusers)