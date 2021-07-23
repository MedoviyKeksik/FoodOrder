import { put } from "redux-saga/effects";
import { HISTORY_SUCCEED } from "./constants";

function* fetchHistory(action) {
    console.log("HISTORY SUCCEED");
    yield put({
        type: HISTORY_SUCCEED,
        payload: {
            items: [
                {
                    orderId: 1,
                    food: {    
                        totalCount: 2,
                        items: [
                            { title: 'Item1', count: 5, cost: 10 },
                            { title: 'Item2' }
                        ]
                    }
                }
            ]
        }
    });
    
}

export default fetchHistory;