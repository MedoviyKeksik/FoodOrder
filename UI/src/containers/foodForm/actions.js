import { FOOD_ADD_CATALOG_SENT } from "./constants";

export function addFoodToCatalog(payload) {
    return {
        type: FOOD_ADD_CATALOG_SENT,
        payload
    }
}