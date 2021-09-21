import { registerUserFail, registerUserSuccess } from "./Action";
import { put, call, takeEvery} from "redux-saga/effects"
import { REGISTER_USER } from "./ActionTypes";
import userApi from "../../../api/UserApi";

function* registerUser({ payload: {username, password, history} }) {
  try {
    const users = yield call(userApi.getAll);
    if(!checkUsernameExisted(username, users)){
        yield call(userApi.post, {username, password})
        yield put(registerUserSuccess('Sign up successfully!'));
        history.push("/");
    }
    else{
        yield put(registerUserFail('This username has already been used'))
    }
  } catch (error) {
    yield put(registerUserFail(error.message))
  }
}

function checkUsernameExisted(username, users) {
  if (!users) return true;
  const account = users.filter((user) => user.username === username);
  if (account.length > 0) return true;
  else return false;
}

function* registerSaga(){
    yield takeEvery(REGISTER_USER, registerUser)
}

export default registerSaga
