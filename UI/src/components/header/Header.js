import React from 'react';
import LocaleSwitcher from '../../containers/localeSwitcher/LocaleSwitcher';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import { Link } from 'react-router-dom';
import LoginManager from '../../components/loginManager/LoginManager';
import CartManager from '../cartManager/CartManager';
import PropTypes from 'prop-types';

function Header(props) {
    function isAdmin(user) {
        for (let i in user.roles)
        {
            if (user.roles[i].title === "Administrator") return true;
        }
        return false;
    }
    return (
        <div className="wrapper wrapper_header">
            <header className="header">
                <Link className="header__title-link" to="/">
                    <h1 className="header__title">Pizza</h1>
                </Link>
                <Navbar isAdmin={props.user && isAdmin(props.user)} />
                <CartManager isAuthorized={props.user != null} className="header__cart" count={props.cartCount || 0} />
                <LocaleSwitcher className="header__locale-switcher" locale={props.locale} />
                <LoginManager user={props.user} />
            </header>
        </div>
    );
}

Header.propTypes = {
    cartCount: PropTypes.number.isRequired,
    user: PropTypes.object
};  

export default Header;

