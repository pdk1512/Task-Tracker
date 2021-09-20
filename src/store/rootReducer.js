import { combineReducers } from 'redux'
import userReducer from './authentication/login/Reducer'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer