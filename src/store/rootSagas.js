import { all, fork } from 'redux-saga/effects'
import loginSaga from './authentication/login/saga'
import registerSaga from './authentication/register/saga'

export default function* rootSagas(){
    yield all([
        fork(loginSaga),
        fork(registerSaga),
    ])
}