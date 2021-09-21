import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER } from "./ActionTypes";

const initialState = {
  loading: false,
  user: null,
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {...initialState};
    default:
      return state;
  }
};

export default loginReducer
