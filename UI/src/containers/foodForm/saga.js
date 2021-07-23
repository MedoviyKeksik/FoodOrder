import { put } from "redux-saga/effects";
import { FOOD_ADD_CATALOG_SUCCEED } from "./constants";

function *sendFood(action) {
    yield put({
        type: FOOD_ADD_CATALOG_SUCCEED
    });
} 

export default sendFood;