import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../app/store';
import LocaleSwitcher from '../../features/localizer/LocaleSwitcher';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import { FormattedMessage } from 'react-intl';

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
            {/* <LoginManager /> */}
        </header>
    );
}

export default Header;