import { put, takeEvery } from 'redux-saga/effects';
import { FOOD_FETCH_REQUESTED, FOOD_FETCH_SUCCEED } from './constants';

const Food = {
    totalCount: 110,
    items: [
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #3",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #4",
            description: "Another pizza!"
        },
        {
            title: "Pizza #5",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #6",
            description: "Another pizza!"
        },
        {
            title: "Pizza #7",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #8",
            description: "Another pizza!"
        },
        {
            title: "Pizza #9",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #10",
            description: "Another pizza!"
        },
        {
            title: "Pizza #11",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #12",
            description: "Another pizza!"
        },
        {
            title: "Pizza #13",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #14",
            description: "Another pizza!"
        },
        {
            title: "Pizza #15",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #16",
            description: "Another pizza!"
        },
        {
            title: "Pizza #17",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #18",
            description: "Another pizza!"
        },
        {
            title: "Pizza #19",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #20",
            description: "Another pizza!"
        },
        {
            title: "Pizza #21",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },
        {
            title: "Pizza #1",
            description: "So tasty pizza!"
        },
        {
            title: "Pizza #2",
            description: "Another pizza!"
        },

    ]
}

function getSuffix(array, offset, count) {
    let result = [];
    for (let i = offset; i < Math.min(offset + count, array.length); i++) {
        result.push(array[i]);
    }
    return result;
}

function* fetchFood(action) {
    console.log('FOOD IS FETCHED');
    console.log(action.payload);
    yield put({type: FOOD_FETCH_SUCCEED, info: {
        totalCount: Food.totalCount,
        items: getSuffix(Food.items, action.payload.offset, action.payload.count)
    }});
}

export default fetchFood;