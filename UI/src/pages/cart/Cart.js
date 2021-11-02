import React from "react";
import {useSelector} from 'react-redux';
import CartTable from "../../components/cartTable/CartTable";
import { store } from "../../store";
import { addOrder } from "./actions";

function Cart() {
    const food = useSelector((state) => state.root.cart);
    const user = useSelector((state) => state.root.user);
    function handleConfirn() {
        store.dispatch(addOrder({
            food,
            userId: user.id,
            time: new Date
        }));
    }

    return (
        <div className="cart">
            <CartTable food={food} />
            <button onClick={handleConfirn}>Confirn</button>
        </div> 
    );
}

export default Cart;