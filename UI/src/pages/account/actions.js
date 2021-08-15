import { HISTORY_FAILED, HISTORY_REQUESTED, HISTORY_SUCCEED } from "./constants";

export function getHistory(payload) {
    return {
        type: HISTORY_REQUESTED,
        payload
    };
}

export function historySucceed(history) {
    return {
        type: HISTORY_SUCCEED,
        history
    }
}

export function historyFailed(e) {
    return {
        type: HISTORY_FAILED,
        error: e
    }
}