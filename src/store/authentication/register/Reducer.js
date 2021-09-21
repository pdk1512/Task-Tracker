import { REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_USER } from "./ActionTypes";

const initialState = {
  loading: false,
  message: "",
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: "",
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        message: "",
        loading: false,
      };
    default: return state
  }
};

export default registerReducer
