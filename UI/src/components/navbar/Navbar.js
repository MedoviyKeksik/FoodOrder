import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar(props) {
    return (
        <ul className="navbar">
            <li className="navbar__item"><Link to="/admin">
                <FormattedMessage defaultMessage="Admin" id="app.navbar.admin" />
            </Link></li>
            <li className="navbar__item"><Link to="/cart"> 
                <FormattedMessage defaultMessage="Cart" id="app.navbar.cart" />
            </Link></li>
        </ul>
    );
}

export default Navbar;