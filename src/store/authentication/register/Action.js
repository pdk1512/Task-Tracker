import { REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_USER } from "./ActionTypes"

export const registerUserRequest = (username, password, history) => {
    return {
        type: REGISTER_USER,
        payload: {username, password, history}
    }
}

export const registerUserSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    }
}

export const registerUserFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}