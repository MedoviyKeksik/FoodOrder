import { put, takeEvery } from 'redux-saga/effects';

function* fetchFood(action) {
    yield put({type: "FOOD_CARDS_RECIEVED", info: {    
        totalCount: 1,
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
    yield takeEvery("FOOD_CARDS_REQUESTED", fetchFood);
}

export default saga;