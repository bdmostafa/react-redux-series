import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
// import bookReducer from './book/bookReducer'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store