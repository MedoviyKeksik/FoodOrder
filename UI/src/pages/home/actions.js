import {
    FOOD_FETCH_REQUESTED
} from './constants'

export function requestFood(payload) {
    return {
        type: FOOD_FETCH_REQUESTED,
        payload
    };
}