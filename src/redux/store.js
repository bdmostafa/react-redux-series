import { createStore } from 'redux'
import rootReducer from './rootReducer'
// import bookReducer from './book/bookReducer'

const store = createStore(rootReducer)

export default store