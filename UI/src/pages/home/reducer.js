import { FOOD_FETCH_FAILED, FOOD_FETCH_SUCCEED } from "./constants";

const initialState = {
    food: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_FETCH_SUCCEED:
            return action.data;
        case FOOD_FETCH_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;