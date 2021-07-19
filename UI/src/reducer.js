import { USER_LOGIN_SUCCEED } from "./containers/loginForm/constants";

const initialState = {

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCEED: {
            return {
                ...state,
                user: action.user
            }
        }
        default: 
            return state;
    }
}
