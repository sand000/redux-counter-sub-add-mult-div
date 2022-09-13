import { counterReducer } from "../Counter/counter";
const { combineReducers, legacy_createStore } = require("redux");

let rootReducer = combineReducers({
    counter: counterReducer,
});

export const store = legacy_createStore(rootReducer)