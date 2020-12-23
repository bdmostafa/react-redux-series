import { createStore } from 'redux'
import bookReducer from './book/bookReducers'
const store = createStore(bookReducer)

export default store