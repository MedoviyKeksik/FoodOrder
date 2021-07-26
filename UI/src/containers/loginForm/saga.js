import { put } from "@redux-saga/core/effects";
import { USER_LOGIN_FAILED, USER_LOGIN_SUCCEED } from "./constants";

function* fetchLogin(action) {
    console.log(action);
    if (action.user.login === 'slonik' && action.user.password === '12345') 
        yield put({
            type: USER_LOGIN_SUCCEED, 
            user: {
                id: 1,
                name: 'Klim',
                surname: 'Severin',
                email: 'severin.klim@yandex.by',
                phone: '+375445677227',
                isAdmin: false
            }
        });
    else if (action.user.login === 'admin' && action.user.password === '12345')
        yield put({
            type: USER_LOGIN_SUCCEED,
            user: {
                id: 0,
                name: 'Admin',
                isAdmin: true
            }
        });
    else yield put({
        type: USER_LOGIN_FAILED
    });
}

export default fetchLogin;