import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <ul>
            <li><Link to="/">
                <FormattedMessage defaultMessage="Home" id="app.navbar.home" />
            </Link></li>
            <li><Link to="/account">
                <FormattedMessage defaultMessage="Account" id="app.navbar.account" />
            </Link></li>
            <li><Link to="/login">
                <FormattedMessage defaultMessage="Login" id="app.navbar.login" />
            </Link></li>
            <li><Link to="/register">
                <FormattedMessage defaultMessage="Register" id="app.navbar.register" />
            </Link></li>
            <li><Link to="/cart"> 
                <FormattedMessage defaultMessage="Cart" id="app.navbar.cart" />
            </Link></li>
            <li><Link to="/admin">
                <FormattedMessage defaultMessage="Admin" id="app.navbar.admin" />
            </Link></li>
        </ul>
    );
}

export default Navbar;