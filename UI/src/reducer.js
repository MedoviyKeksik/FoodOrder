import { ADD_FOOD_TO_CART } from "./components/foodAddModal/constants";
import { USER_LOGIN_SUCCEED } from "./containers/loginForm/constants";

const initialState = {
    user: null,
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCEED: {
            return {
                ...state,
                user: action.user
            }
        }
        case ADD_FOOD_TO_CART: {
            let cart = [...state.cart];
            cart.push(state.payload);
            return {
                ...state,
                cart
            };
        }
        default: 
            return state;
    }
}
