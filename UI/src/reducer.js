import { ADD_FOOD_TO_CART } from "./components/foodAddModal/constants";
import { REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "./containers/cartRow/constatnts";
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
            cart.push(action.payload);
            return {
                ...state,
                cart
            };
        }
        case UPDATE_CART_ITEM: {
            let cart = [...state.cart];
            let ind = cart.findIndex((element, index, arr) => element.id = action.payload.id);
            for (let key in action.payload) {
                cart[ind][key] = action.payload[key];
            }
            return {
                ...state,
                cart
            }
        }
        case REMOVE_CART_ITEM: {
            let cart = [...state.cart];
            let ind = cart.findIndex((element, index, arr) => element.id = action.payload.id);
            if (ind != 'undefined') {
                cart.splice(ind, 1);
            }
            return {
                ...state,
                cart
            }
        }
        default: 
            return state;
    }
}
