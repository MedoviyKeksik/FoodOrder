import {
    FOOD_FETCH_REQUESTED,
    FOOD_FETCH_SUCCEED,
    FOOD_FETCH_FAILED
} from './constants'

export function requestFood(payload) {
    return {
        type: FOOD_FETCH_REQUESTED,
        payload
    };
}