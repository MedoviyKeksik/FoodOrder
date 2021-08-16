import { put, call } from "redux-saga/effects";
import { historyFailed, historySucceed } from "./actions";

function* fetchHistory(action) {
    console.log("HISTORY SUCCEED");
    try {
        const data = yield call(() => {
            return fetch('').then(res => res.json());
        });
        yield put(historySucceed(data));
    } catch (e) {
        yield put(historyFailed(e));
    }
    // yield put({
    //     type: HISTORY_SUCCEED,
    //     payload: {
    //         items: [
    //             {
    //                 orderId: 1,
    //                 food: {    
    //                     totalCount: 2,
    //                     items: [
    //                         { title: 'Item1', count: 5, cost: 10 },
    //                         { title: 'Item2' }
    //                     ]
    //                 }
    //             }
    //         ]
    //     }
    // });
    
}

export default fetchHistory;