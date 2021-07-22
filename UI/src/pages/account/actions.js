import { HISTORY_REQUESTED } from "./constants";

export function getHistory(payload) {
    return {
        type: HISTORY_REQUESTED,
        payload
    };
}