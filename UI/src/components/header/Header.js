import React from 'react';
import LocaleSwitcher from '../../containers/localeSwitcher/LocaleSwitcher';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import { Link } from 'react-router-dom';
import LoginManager from '../../components/loginManager/LoginManager';
import CartManager from '../cartManager/CartManager';

function Header(props) {
    return (
        <div className="wrapper wrapper_header">
            <header className="header">
                <Link className="header__title" to="/">
                    <h1>Pizza</h1>
                </Link>
                <Navbar isAdmin={props.user && props.user.isAdmin} />
                <CartManager className="header__cart" count={props.count || 0} />
                <LocaleSwitcher className="header__locale-switcher" locale={props.locale} />
                <LoginManager user={props.user} />
            </header>
        </div>
    );
}

export default Header;

