



import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./Vpawar/Reducer";
import { CartReducer } from "./Pranay/Reducer";

let rootReducer = combineReducers({
    Cart:CartReducer,
    ProductReducer
});

let store = legacy_createStore(rootReducer, applyMiddleware(thunk.default));


export default store;
