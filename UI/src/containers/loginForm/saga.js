import { put } from "@redux-saga/core/effects";
import { loginFailed, loginSucced } from "./actions";

function* fetchLogin(action) {
    console.log(action);
    try {
        const data = yield call(() => fetch('https://localhost:44368/api/User/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(action.user)
        }).then(res => res.json()));
        yield put(loginSucced(data));
    } catch (e) {
        yield put(loginFailed(e));
    }
}

export default fetchLogin;