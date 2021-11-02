import { put, call } from "@redux-saga/core/effects";
import { API_URL, USER } from "../../constants";
import { userRegisterFailed, userRegisterSucceed } from "./actions";

function* fetchRegister(action) {
    try {
        const data = yield call(() => {
            return fetch(API_URL + USER, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.user)
            }).then(res => res.json());
        });
        yield put(userRegisterSucceed(data));
    } catch (e) {
        yield put(userRegisterFailed(e));
    }
}

export default fetchRegister;