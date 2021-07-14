import React from 'react';
import { store } from '../../store';

function LocalizationButton(props) {
    return (
        <select value={props.locale} onChange={(e) => store.dispatch({type: 'localizer/changeLocale', payload: e.target.value})}>
            <option value='en'>English</option>
            <option value='ru'>Русский</option>
        </select>
    );
}

export default LocalizationButton;