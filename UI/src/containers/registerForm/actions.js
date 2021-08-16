import { USER_REGISTER_FAILED, USER_REGISTER_REQUESTED, USER_REGISTER_SUCCEED } from "./constatnts";

export function userRegister(user) {
    return {
        type: USER_REGISTER_REQUESTED,
        user
    }
}

export function userRegisterSucceed(user) {
    return {
        type: USER_REGISTER_SUCCEED,
        user
    }
}

export function userRegisterFailed(error) {
    return {
        type: USER_REGISTER_FAILED,
        error 
    }
}

