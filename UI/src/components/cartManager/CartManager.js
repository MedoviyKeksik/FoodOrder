import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartManager.scss';

function CartManager(props) {
    return (
        <Link className={props.className + " cart"} to="/cart">
            <span className="cart__count">{props.count}</span>
            <span> </span>
            <FontAwesomeIcon className="cart__cart" icon={faShoppingCart} />
        </Link>
    );
}

export default CartManager;