import { put, call, select } from "redux-saga/effects";
import { API_URL, ORDERS } from "../../constants";
import { addOrderFailed, addOrderSucceed } from "./actions";

function *sendOrder(action) {
    try {
        let accessToken = yield select(state => state.root.user.accessToken);
        const data = yield call(() => {
            return fetch(API_URL + ORDERS, {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + accessToken, 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            }).then(res => res.json());
        });
        yield put(addOrderSucceed(data));
    } catch (e) {
        yield put(addOrderFailed(e));
    }
} 



export default sendOrder;