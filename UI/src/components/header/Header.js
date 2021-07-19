import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import LocaleSwitcher from '../../containers/localeSwitcher/LocaleSwitcher';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import { FormattedMessage } from 'react-intl';
import LoginManager from '../../components/loginManager/LoginManager'

function Header(props) {
    return (
        <header className="header">
            <Link to="/">
                <h1>Pizza</h1>
            </Link>
            <Navbar isAdmin={props.user && props.user.isAdmin} />
                <CartManager className="header__cart" count={props.count || 0} />
                <FormattedMessage defaultMessage="Cart" id="app.navbar.cart" />
            </Link></span>
            <LocaleSwitcher className="header__localeSwitcher" locale={store.getState().localizer.locale} />
            <LoginManager user={props.user} />
        </header>
    );
}

export default Header;

