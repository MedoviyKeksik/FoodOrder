import { LOCALE_CHANGED, LOCALIZATION_LOADED } from "./constants";

export function changeLocale(locale) {
    return {
        type: LOCALE_CHANGED,
        locale    
    }
}

export function loadLocalization(payload) {
    return {
        type: LOCALIZATION_LOADED,
        payload
    }
}