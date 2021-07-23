import React from "react";
import {useSelector} from 'react-redux';
import CartTable from "../../components/cartTable/CartTable";
import { store } from "../../store";
import { addOrder } from "./actions";
import { ORDER_SENT } from "./constants";

function Cart() {
    const food = useSelector((state) => state.root.cart);
    console.log("CART");
    console.log(food);
    function handleConfirn() {
        store.dispatch(addOrder({food}));
    }

    return (
        <>
            <h1>Cart</h1>      
            <CartTable food={food} />
            <button onClick={handleConfirn}>Confirn</button>
        </> 
    );
}

export default Cart;