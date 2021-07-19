import { put, takeEvery } from "@redux-saga/core/effects";
import { USER_REGISTER_REQUESTED, USER_REGISTER_SUCCEED } from "./constatnts";

function fetchRegister(action) {
    yield put({type: USER_REGISTER_SUCCEED});
}

export default fetchRegister;