import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
let thunk = require("redux-thunk");
import { reducer as ProductReducer } from "./Vpawar/Reducer";
let rootReducer = combineReducers({ProductReducer});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk.default));

export default store;
