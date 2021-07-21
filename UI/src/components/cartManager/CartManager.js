import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartManager.scss';
import NeedAuthModal from '../needAuthModal/NeedAuthModal';

function CartManager(props) {
    if (props.isAuthorized) {
        return (
            <Link className={props.className + " cart"} to="/cart">
                <span className="cart__count">{props.count}</span>
                <span> </span>
                <FontAwesomeIcon className="cart__cart" icon={faShoppingCart} />
            </Link>
        );
    } else {
        return (
            <NeedAuthModal
                trigger={
                <a className={props.className + " cart"}>
                    <span className="cart__count">{props.count}</span>
                    <span> </span>    
                    <FontAwesomeIcon className="cart__cart" icon={faShoppingCart} />
                </a>}     
            />
        );
    }
}

export default CartManager;