import { combineReducers } from 'redux'
import loginReducer from './authentication/login/Reducer'
import registerReducer from './authentication/register/Reducer'

const rootReducer = combineReducers({
    user: loginReducer,
    register: registerReducer
})

export default rootReducer