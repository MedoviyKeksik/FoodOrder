import { createSlice } from "@reduxjs/toolkit";

import Russian from '../../lang/ru.json';
import English from '../../lang/en.json';

const initialState = {
    locale: navigator.language,
    language: getLanguage(navigator.language)
}

export const localizerSlice = createSlice({
    name: "localizer",
    initialState,
    reducers: {
        changeLocale: (state, action) => {
            state.locale = action.payload;
            state.language = getLanguage(action.payload);

        }
    }
});

export default localizerSlice.reducer;

function getLanguage(locale) {
    switch (locale) {
        // case 'ru':
            // return Russian;
        default:
            return English;
    }
}