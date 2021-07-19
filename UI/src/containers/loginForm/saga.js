import { put, takeEvery } from "@redux-saga/core/effects";
import { USER_LOGIN_FAILED, USER_LOGIN_REQUESTED, USER_LOGIN_SUCCEED } from "./constants";

function* fetchLogin(action) {
    console.log(action);
    if (action.user.login == 'slonik' && action.user.password == '12345') 
        yield put({
            type: USER_LOGIN_SUCCEED, 
            user: {
                name: 'Klim',
                surname: 'Severin',
                isAdmin: false
            }
        });
    else if (action.user.login == 'admin' && action.user.password == '12345')
        yield put({
            type: USER_LOGIN_SUCCEED,
            user: {
                name: 'Admin',
                isAdmin: true
            }
        });
    else yield put({type: USER_LOGIN_FAILED});
}

export default fetchLogin;