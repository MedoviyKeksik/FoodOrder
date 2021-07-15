import React, { useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import { store } from '../../store';
import { loadLocale, saveLocale } from './localStorage';

class LocalizationButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: props.locale
        }

        this.handleLocaleChange = this.handleLocaleChange.bind(this);
    }

    handleLocaleChange(e) {
        store.dispatch({type: 'localizer/changeLocale', payload: e.target.value});
        saveLocale(e.target.value);
        this.setState({locale: e.target.value});
    }

    render() {
        return (
            <select value={this.state.locale} onChange={this.handleLocaleChange}>
                <option value='en'>English</option>
                <option value='ru'>Русский</option>
            </select>
        );
    }
}

export default LocalizationButton;