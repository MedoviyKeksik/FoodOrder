import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { loadLocalization } from '../../containers/localeSwitcher/actions';
import { FOODORDER_NAVBAR_ADMIN_LOCALIZATION } from './constants';
import './Navbar.scss';
import localization from './messages';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';

function Navbar(props) {    
    props.loadLoclization(localization);
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

const mapDispatchToProps = {
    loadLoclization: loadLocalization
}

export default connect(null, mapDispatchToProps)(Navbar);