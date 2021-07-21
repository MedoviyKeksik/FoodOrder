import { ADD_ORDER } from "./constants";

export function addOrder(payload) {
    return {
        type: ADD_ORDER,
        payload
    }
}