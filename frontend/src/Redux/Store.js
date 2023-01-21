import {mobReducer} from "./Vikas/reducer";
import logger from "redux-logger"

let {legacy_createStore,applyMiddleware,combineReducers} = require('redux')
let thunk = require('redux-thunk')

let rootReducer = combineReducers({
    mobReducer
})

let store = legacy_createStore(rootReducer)

export default store
