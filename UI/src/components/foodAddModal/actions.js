import {ADD_FOOD_TO_CART} from './constants';

export function addFoodToCart(payload) {
    return {
        type: ADD_FOOD_TO_CART,
        payload
    }
}