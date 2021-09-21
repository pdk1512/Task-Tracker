import { REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_USER } from "./ActionTypes"

export const registerUserRequest = (username, password, history) => {
    return {
        type: REGISTER_USER,
        payload: {username, password, history}
    }
}

export const registerUserSuccess = (message) => {
    return {
        type: REGISTER_SUCCESS,
        payload: message
    }
}

export const registerUserFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}