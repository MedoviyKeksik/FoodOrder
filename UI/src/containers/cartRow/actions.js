import { REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "./constatnts";

export function removeCartItem(payload) {
    return {
        type: REMOVE_CART_ITEM,
        payload
    }
}

export function updateCartItem(payload) {
    return {
        type: UPDATE_CART_ITEM,
        payload
    }
}