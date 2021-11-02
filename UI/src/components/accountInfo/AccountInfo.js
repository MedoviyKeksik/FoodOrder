import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { loadLocalization } from '../../containers/localeSwitcher/actions';
import { FOODORDER_ACCOUNTINFO_EMAIL, FOODORDER_ACCOUNTINFO_NAME, FOODORDER_ACCOUNTINFO_PHONE, FOODORDER_ACCOUNTINFO_SURNAME } from './constants';
import localization from './messages';
import './AccountInfo.scss';
import { connect } from 'react-redux';

function AccountInfo(props) {
    props.loadLoclization(localization);
    return (
        <table className="account-info">
            <tr>
                <td className="account-info__cell"><FormattedMessage defaultMessage="Name" id={FOODORDER_ACCOUNTINFO_NAME} /></td>
                <td className="account-info__cell">{props.name}</td>
            </tr>
            <tr>
                <td className="account-info__cell"><FormattedMessage defaultMessage="Surname" id={FOODORDER_ACCOUNTINFO_SURNAME} /></td>
                <td className="account-info__cell">{props.surname}</td>
            </tr>
            <tr>
                <td className="account-info__cell"><FormattedMessage defaultMessage="Email" id={FOODORDER_ACCOUNTINFO_EMAIL} /></td>
                <td className="account-info__cell">{props.email}</td>
            </tr>
            <tr>
                <td className="account-info__cell"><FormattedMessage defaultMessage="Phone" id={FOODORDER_ACCOUNTINFO_PHONE} /></td>
                <td className="account-info__cell">{props.phone}</td>
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

const mapDispatchToProps = {
    loadLoclization: loadLocalization
}

export default connect(null, mapDispatchToProps)(AccountInfo);