import { USER_LOGIN_FAILED, USER_LOGIN_REQUESTED, USER_LOGIN_SUCCEED } from "./constants";

export function userLogin(user) {
    console.log(user);
    return {
        type: USER_LOGIN_REQUESTED,
        user
    }
}

export function loginSucced(user) {
    return {
        type: USER_LOGIN_SUCCEED,
        user
    }
}

export function loginFailed(error) {
    return {
        type: USER_LOGIN_FAILED,
        error
    }
}