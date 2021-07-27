import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import { store } from "../../store";
import { loadLoclization } from "../../containers/localeSwitcher/actions";
import localization from './messages';
import { FormattedMessage } from "react-intl";
import { FOODORDER_NEEDAUTHMODAL_LOGIN, FOODORDER_NEEDAUTHMODAL_REGISTER, FOODORDER_NEEDAUTHMODAL_TITLE } from "./constants";
import PropTypes from 'prop-types';

store.dispatch(loadLoclization(localization));

function NeedAuthModal(props) {
    return (
        <Modal className={props.className} trigger={props.trigger} >
            <h3><FormattedMessage defaultMessage="Please authorize" id={FOODORDER_NEEDAUTHMODAL_TITLE} /></h3>
            <Link to="/login"><FormattedMessage defaultMessage="Login" id={FOODORDER_NEEDAUTHMODAL_LOGIN} /></Link>
            <span>&nbsp;</span>
            <Link to="/register"><FormattedMessage defaultMessage="Register" id={FOODORDER_NEEDAUTHMODAL_REGISTER} /></Link>
        </Modal>
    );
}

NeedAuthModal.propTypes = {
    className: PropTypes.string,
    trigger: PropTypes.element.isRequired,
};

export default NeedAuthModal;