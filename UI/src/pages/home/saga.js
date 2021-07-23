import { put, takeEvery } from 'redux-saga/effects';
import { FOOD_FETCH_REQUESTED, FOOD_FETCH_SUCCEED } from './constants';

const Food = {
    totalCount: 110,
    items: [
        {
            id: 123,
            title: "4 сезона",
            description: "Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы.",
            imageSource: "/images/pizza1.jpeg",
            cookingTime: "3 минуты",
            cost: 300
        },
        {
            id: 124,
            title: "Сырная 🌱",
            description: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
            imageSource: "/images/pizza2.jpeg",
            cookingTime: "10 минут",
            cost: 500
        },
        {
            id: 125,
            title: "Гавайская",
            description: "Ветчина, ананасы, моцарелла, томатный соус",
            imageSource: "/images/pizza3.jpeg",
            cookingTime: "1,5 минуты",
            cost:   100
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
    yield put({type: FOOD_FETCH_SUCCEED, info: {
        totalCount: Food.totalCount,
        items: getSuffix(Food.items, action.payload.offset, action.payload.count)
    }});
}

export default fetchFood;