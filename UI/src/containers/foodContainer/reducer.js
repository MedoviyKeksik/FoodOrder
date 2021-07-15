import { FOOD_FETCH_SUCCEED } from "./constants";

const initialState = {
    food: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_FETCH_SUCCEED:
            return action.info;
        default:
            return state;
    }
}

export default reducer;