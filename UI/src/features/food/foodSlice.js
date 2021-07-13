const initialState = {
    food: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOOD_CARDS_RECIEVED':
            return action.info;
        default:
            return state;
    }
}