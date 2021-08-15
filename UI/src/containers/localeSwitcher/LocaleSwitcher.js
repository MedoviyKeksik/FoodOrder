import React from 'react';
import { store } from '../../store';
import { changeLocale } from './actions';
import { saveLocale } from './localStorage';
import './LocaleSwitcher.scss';
import PropTyeps from 'prop-types';

class LocalizationButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: props.locale
        }

        this.handleLocaleChange = this.handleLocaleChange.bind(this);
    }

    handleLocaleChange(e) {
        store.dispatch(changeLocale(e.target.value));
        saveLocale(e.target.value);
        this.setState({locale: e.target.value});
    }

    render() {
        return (
            <select className={'locale-switcher ' + this.props.className} value={this.state.locale} onChange={this.handleLocaleChange}>
                <option value='en'>Eng</option>
                <option value='ru'>Рус</option>
            </select>
        );
    }
}

LocalizationButton.propTypes = {
    locale: PropTyeps.oneOf(['en', 'ru'])
};

export default LocalizationButton;