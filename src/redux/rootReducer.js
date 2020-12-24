import { combineReducers } from 'redux'
import bookReducer from './book/bookReducer'
import penReducer from './pen/penReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
    book: bookReducer,
    pen: penReducer,
    user: userReducer,
})

export default rootReducer