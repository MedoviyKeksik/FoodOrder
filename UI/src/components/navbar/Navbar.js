import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { loadLoclization } from '../../containers/localeSwitcher/actions';
import { FOODORDER_NAVBAR_ADMIN_LOCALIZATION } from './constants';
import './Navbar.scss';
import localization from './messages';
import PropTypes from 'prop-types';

store.dispatch(loadLoclization(localization));

function Navbar(props) {    
    return (
        <ul className="navbar">
            { props.isAdmin && 
                <li className="navbar__item">
                    <Link to="/admin">
                        <FormattedMessage defaultMessage="Admin" id={FOODORDER_NAVBAR_ADMIN_LOCALIZATION} />
                    </Link>
                </li>
            }
        </ul>
    );
}

Navbar.propTypes = {
    isAdmin: PropTypes.bool
};

export default Navbar;