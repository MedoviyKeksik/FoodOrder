import { LOCALE_CHANGED, LOCALIZATION_LOADED } from "./constants";
import { loadLocale } from "./localStorage";

const initialState = {
    locale: loadLocale() || 'en',
    messages: {
        [loadLocale() || 'en']: {}
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCALE_CHANGED: {
            if (state.messages[action.locale] === undefined) 
                return { 
                    locale: action.payload,
                    messages: {
                        ...state.messages,
                        [action.locale]: {}
                    }
                };
            return { 
                ...state,
                locale: action.locale
            };
        }
        case LOCALIZATION_LOADED: {
            let newMessages = {...state.messages};
            for (let locale in action.payload) {
                newMessages[locale] = {...state.messages[locale], ...action.payload[locale]};
            }
            return {
                ...state,
                messages: newMessages
            }
        }
        default:
            return state;
    }
}

export default reducer;