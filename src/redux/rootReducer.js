import { combineReducers } from 'redux'
import bookReducer from './book/bookReducer'
import penReducer from './pen/penReducer'


const rootReducer = combineReducers({
    book: bookReducer,
    pen: penReducer
})

export default rootReducer