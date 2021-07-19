import { USER_REGISTER_REQUESTED } from "./constatnts";

function userRegister(user) {
    return {
        type: USER_REGISTER_REQUESTED,
        user
    }
}