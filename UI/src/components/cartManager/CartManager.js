import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartManager.scss';
import NeedAuthModal from '../needAuthModal/NeedAuthModal';
import PropTypes from 'prop-types';

function CartManager(props) {
    if (props.isAuthorized) {
        return (
            <Link className={props.className + " cart"} to="/cart">
                <span className="cart__count">{props.count || 0 }</span>
                <span>&nbsp;</span>
                <FontAwesomeIcon className="cart__cart" icon={faShoppingCart} />
            </Link>
        );
    } else {
        return (
            <NeedAuthModal
                trigger={
                <a className={props.className + " cart"} href="/#">
                    <span className="cart__count">{props.count || 0}</span>
                    <span className="cart__separator">&nbsp;</span>    
                    <FontAwesomeIcon className="cart__cart" icon={faShoppingCart} />
                </a>}     
            />
        );
    }
}

CartManager.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    className: PropTypes.string,
    count: PropTypes.number,
}

export default CartManager;