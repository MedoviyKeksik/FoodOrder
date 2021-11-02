import { FOOD_ADD_CATALOG_FAILED, FOOD_ADD_CATALOG_SENT, FOOD_ADD_CATALOG_SUCCEED } from "./constants";

export function addFoodToCatalog(payload) {
    return {
        type: FOOD_ADD_CATALOG_SENT,
        payload
    }
}

export function addFoodToCatalogSucceed(payload) {
    return {
        type: FOOD_ADD_CATALOG_SUCCEED,
        payload
    }
}

export function addFoodToCatalogFailed(error) {
    return {
        type: FOOD_ADD_CATALOG_FAILED,
        error
    }
}