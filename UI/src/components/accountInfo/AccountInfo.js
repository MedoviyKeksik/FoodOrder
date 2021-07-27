import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { loadLoclization } from '../../containers/localeSwitcher/actions';
import { store } from '../../store';
import { FOODORDER_ACCOUNTINFO_EMAIL, FOODORDER_ACCOUNTINFO_NAME, FOODORDER_ACCOUNTINFO_PHONE, FOODORDER_ACCOUNTINFO_SURNAME } from './constants';
import localization from './messages';

store.dispatch(loadLoclization(localization));

function AccountInfo(props) {
    return (
        <table>
            <tr>
                <td><FormattedMessage defaultMessage="Name" id={FOODORDER_ACCOUNTINFO_NAME} /></td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td><FormattedMessage defaultMessage="Surname" id={FOODORDER_ACCOUNTINFO_SURNAME} /></td>
                <td>{props.surname}</td>
            </tr>
            <tr>
                <td><FormattedMessage defaultMessage="Email" id={FOODORDER_ACCOUNTINFO_EMAIL} /></td>
                <td>{props.email}</td>
            </tr>
            <tr>
                <td><FormattedMessage defaultMessage="Phone" id={FOODORDER_ACCOUNTINFO_PHONE} /></td>
                <td>{props.phone}</td>
            </tr>
        </table>
    );
}

AccountInfo.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
}

export default AccountInfo;