import { put } from "redux-saga/effects";
import { HISTORY_SUCCEED } from "./constants";

function* fetchHistory(action) {
    console.log("HISTORY SUCCEED");
    yield put({
        type: HISTORY_SUCCEED,
        payload: {
            totalCount: 2,
            items: [
                { title: 'Item1' },
                { title: 'Item2' }
            ]
        }
    });
    
}

export default fetchHistory;