import api from '../api/apiCaller'

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN = "LOGIN";

export function login(username, password) {
    console.log(username)
    return {
        type: LOGIN,
        username: username,
        password: password
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        loginData: data
    }
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        error: error
    }
}

export function doLogin(username, password) {
    return (dispatch) => {
        dispatch(login(username, password))
        api.login(username, password)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData)
                dispatch(loginSuccess(jsonData))
            })
            .catch((error) => {
                dispatch(loginFail(error))
            })
    }
}
