import { REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_USER } from "./ActionTypes";

const initialState = {
  loading: false,
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
        loading: false,
        error: "",
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default: return state
  }
};

export default registerReducer
