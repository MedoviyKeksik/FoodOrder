import { REMOVE_CART_ITEM } from "./constatnts";

export function removeCartItem(payload) {
    return {
        type: REMOVE_CART_ITEM,
        payload
    }
}
