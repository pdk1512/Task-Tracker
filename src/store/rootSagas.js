import { all, fork } from 'redux-saga/effects'
import authSaga from './authentication/login/saga'

export default function* rootSagas(){
    yield all([
        fork(authSaga)
    ])
}