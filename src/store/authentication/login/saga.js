import userApi from "../../../api/UserApi";
import { put, call, takeEvery } from "redux-saga/effects";
import { loginUserFail, loginUserSuccess } from "./Actions";
import { LOGIN_USER } from "./ActionTypes";
import { toast } from "react-toastify";
import { css } from "glamor";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000,
  hideProgressBar: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
});

function* loginUsers({ payload: { username, password } }) {
  try {
    const users = yield call(userApi.getAll);
    const account = getAccount(users, username, password);
    if (account.length > 0) {
      yield put(loginUserSuccess(account[0]));
      toast.success("Sign in successfully!");
    } else {
      yield put(loginUserFail("Wrong username or password"));
    }
  } catch (error) {
    const errorMsg = error.message;
    yield put(loginUserFail(errorMsg));
  }
}

function getAccount(users, username, password) {
  if (!users) return "";
  const account = users.filter(
    (user) => user.username === username && user.password === password
  );
  return account;
}

function* loginSaga() {
  yield takeEvery(LOGIN_USER, loginUsers);
}

export default loginSaga;
