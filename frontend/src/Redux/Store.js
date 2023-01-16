let {legacy_createStore,applyMiddleware,combineReducers} = require('redux')
let thunk = require('redux-thunk')
let PranayReducer = require('./Pranay/Reducer')

let rootReducer = combineReducers({
    pranay:PranayReducer
})

let store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store
