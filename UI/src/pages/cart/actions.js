import { ORDER_SENT } from "./constants";

export function addOrder(payload) {
    return {
        type: ORDER_SENT,
        payload
    }
}