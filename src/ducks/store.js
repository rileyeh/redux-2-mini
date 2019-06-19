import { createStore, applyMiddleware, combineReducers } from 'redux'
import hackerNewsReducer from './hackerNewsReducer'
import mediumReducer from './mediumReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    hackerNewsReducer, 
    mediumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))