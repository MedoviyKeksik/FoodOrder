import { put, takeEvery } from 'redux-saga/effects';
import { FOOD_FETCH_REQUESTED, FOOD_FETCH_SUCCEED } from './constants';

function* fetchFood(action) {
    yield put({type: FOOD_FETCH_SUCCEED, info: {    
        totalCount: 2,
            items: [
                {
                    title: "Pizza #1",
                    description: "So tasty pizza!"
                },
                {
                    title: "Pizza #2",
                    description: "Another pizza!"
                }
            ]
        }
    });
}

function* saga() {
    yield takeEvery(FOOD_FETCH_REQUESTED, fetchFood);
}

export default saga;