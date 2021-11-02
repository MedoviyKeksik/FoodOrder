import { ORDER_FAILED, ORDER_SENT, ORDER_SUCCEED } from "./constants";

export function addOrder(payload) {
    return {
        type: ORDER_SENT,
        payload
    };
}

export function addOrderSucceed(order) {
    return {
        type: ORDER_SUCCEED,
        order
    };
}

export function addOrderFailed(error) {
    return {
        type: ORDER_FAILED,
        error
    }
}