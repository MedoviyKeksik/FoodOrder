import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { loadLoclization } from '../../containers/localeSwitcher/actions';
import { FOODORDER_LOGINMANAGER_HI, FOODORDER_LOGINMANAGER_LOGIN, FOODORDER_LOGINMANAGER_REGISTER } from './constants';
import './LoginManager.scss';
import localization from './messages';

store.dispatch(loadLoclization(localization));

function LoginManager(props) {  
    let content;
    if (props.user == null) {
        content = (
            <>
                <Link to="/login"><FormattedMessage defaultMessage="Login" id={FOODORDER_LOGINMANAGER_LOGIN} /></Link>
                <span> </span>
                <Link to="/register"><FormattedMessage defaultMessage="Register" id={FOODORDER_LOGINMANAGER_REGISTER} /></Link>
            </>
        );
    } else {
        content = (
            <>
                <span>
                    <FormattedMessage defaultMessage="Hi, " id={FOODORDER_LOGINMANAGER_HI} />
                    <Link to="/account">{props.user.name}</Link>                    
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

export default LoginManager;
