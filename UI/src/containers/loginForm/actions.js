import { USER_LOGIN_REQUESTED } from "./constants";

export function userLogin(user) {
    console.log(user);
    return {
        type: USER_LOGIN_REQUESTED,
        user
    }
}
