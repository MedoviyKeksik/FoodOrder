import { put } from "redux-saga/effects";
import { ORDER_SUCCEED } from "./constants";

function *sendOrder(action) {
    yield put({
        type: ORDER_SUCCEED
    });
} 

export default sendOrder;