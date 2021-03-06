import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { loadLocalization } from '../../containers/localeSwitcher/actions';
import { FOODORDER_LOGINMANAGER_HI, FOODORDER_LOGINMANAGER_LOGIN, FOODORDER_LOGINMANAGER_REGISTER } from './constants';
import './LoginManager.scss';
import localization from './messages';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function LoginManager(props) {  
    props.loadLoclization(localization);
    let content;
    if (props.user == null) {
        content = (
            <>
                <Link className="login-manager__link" to="/login"><FormattedMessage defaultMessage="Login" id={FOODORDER_LOGINMANAGER_LOGIN} /></Link>
                <span>&nbsp;/&nbsp;</span>
                <Link className="login-manager__link" to="/register"><FormattedMessage defaultMessage="Register" id={FOODORDER_LOGINMANAGER_REGISTER} /></Link>
            </>
        );
    } else {
        content = (
            <>
                <span>
                    <FormattedMessage defaultMessage="Hi, " id={FOODORDER_LOGINMANAGER_HI} />
                    <Link className="login-manager__link" to="/account">{props.user.name}</Link>                    
                </span>
            </>
        );
    }
    return (
        <div className="login-manager">
            {content}
        </div>
    );
}

LoginManager.propTypes = {
    user: PropTypes.object
};

const mapDispatchToProps = {
    loadLoclization: loadLocalization
}

export default connect(null, mapDispatchToProps)(LoginManager);
