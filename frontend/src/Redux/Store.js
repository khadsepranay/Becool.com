import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { CartReducer } from "./Pranay/Reducer";

let rootReducer = combineReducers({
    Cart:CartReducer
});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
