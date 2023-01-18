let {legacy_createStore,applyMiddleware,combineReducers} = require('redux')
let thunk = require('redux-thunk')

let rootReducer = combineReducers({
    
})

let store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store
