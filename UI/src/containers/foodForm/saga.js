import { put, call, select } from "redux-saga/effects";
import { addFoodToCatalogFailed, addFoodToCatalogSucceed } from "./actions";
import { API_URL } from "../../constants";

function *sendFood(action) {
    try {
        let accessToken = yield select(state => state.root.user.accessToken);
        const data = yield call(() => {
            return fetch(API_URL + 'food/', {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + accessToken, 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            }).then(res => res.json());
        });
        yield put(addFoodToCatalogSucceed(data));
    } catch (e) {
        yield put(addFoodToCatalogFailed(e));
    }
} 

export default sendFood;