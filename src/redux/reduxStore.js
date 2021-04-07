import { combineReducers, createStore } from "redux";
import { listReducer } from "./listReducer";
import { filterReducer } from "./filterReducer";
import { loadState } from "../localStorage";

const persistedState = loadState();

let redusers = combineReducers({
  mainPage: listReducer,
  filter: filterReducer,
});

export const store = createStore(redusers, persistedState);

window.state = store.getState();
