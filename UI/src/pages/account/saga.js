import { put, call, select } from "redux-saga/effects";
import { API_URL, ORDERSBYUSER } from "../../constants";
import { historyFailed, historySucceed } from "./actions";


function AddParams(url, params) {
    let result = url;
    let isFirst = true;
    for (let i in params) {
        if (params[i] != null) {
            result += (isFirst ? '?' : '&') + i + '=' + params[i];
            isFirst = false;
        } 
    }
    return result;
}

function* fetchHistory(action) {
    try {
        let accessToken = yield select(state => state.root.user.accessToken);
        const data = yield call(() => {
            return fetch(
                AddParams(API_URL + ORDERSBYUSER + action.payload.userId, {locale: action.payload.locale, count: action.payload.count, offset: action.payload.offset}),
                {
                    headers: {
                        'Authorization': 'Bearer ' + accessToken, 
                    }
                }).then(res => res.json());
        });
        yield put(historySucceed(data));
    } catch (e) {
        yield put(historyFailed(e));
    }
}

export default fetchHistory;