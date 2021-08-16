import { put, call } from "@redux-saga/core/effects";
import { API_URL } from "../../constants";
import { loginFailed, loginSucced } from "./actions";

function* fetchLogin(action) {
    console.log(action);
    try {
        const data = yield call(() => {
            return fetch(API_URL + 'user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.user)
            }).then(res => res.json());
        });
        yield put(loginSucced(data));
    } catch (e) {
        yield put(loginFailed(e));
    }
}

export default fetchLogin;