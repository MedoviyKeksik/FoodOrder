import {
    FOOD_FETCH_FAILED,
    FOOD_FETCH_REQUESTED, FOOD_FETCH_SUCCEED
} from './constants'

export function requestFood(payload) {
    console.log('FOOD REQUESTED');
    return {
        type: FOOD_FETCH_REQUESTED,
        payload
    };
}

export function requestFoodSucceed(data) {
    return {
        type: FOOD_FETCH_SUCCEED,
        data
    }
}

export function requsetFoodFailed(e) {
    return {
        type: FOOD_FETCH_FAILED,
        error: e
    }
}