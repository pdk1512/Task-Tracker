import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER } from "./ActionTypes";
// import axios from "axios";
// import userApi from "../../../api/UserApi";

export const loginUserRequest = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: {username, password}
  };
};

export const loginUserSuccess = (userName) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userName,
  };
};

export const loginUserFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: {}
  };
};


// export const fetchUsers = (userName, password) => {
//   return async (dispatch) => {
//     try {
//       dispatch(loginUserRequest);
//       const users = await userApi.getAll();
//       const account = getAccount(users, userName, password);
//       if (account.length > 0) {
//         dispatch(loginUserSuccess(account[0]));
//       }else{
//         dispatch(loginUserFail("Wrong username or password"));
//       }
//     } catch (error) {
//       const errorMsg = error.message;
//       dispatch(loginUserFail(errorMsg));
//     }
//   };
// };

// const getAccount = (users, username, password) => {
//   if (!users) return "";

//   const account = users.filter(
//     (user) => user.username === username && user.password === password
//   );

//   return account;
// };
