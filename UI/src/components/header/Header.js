import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import LocaleSwitcher from '../../containers/localeSwitcher/LocaleSwitcher';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import { FormattedMessage } from 'react-intl';
import LoginManager from '../../containers/loginManager/LoginManager';

function Header(props) {
    return (
        <header className="header">
            <Link to="/">
                <h1>Pizza</h1>
            </Link>
            <Navbar />
            <span className="navbar__item"><Link to="/cart"> 
                <FormattedMessage defaultMessage="Cart" id="app.navbar.cart" />
            </Link></span>
            <LocaleSwitcher className="header__localeSwitcher" locale={store.getState().localizer.locale} />
            <LoginManager />
        </header>
    );
}

export default Header;

