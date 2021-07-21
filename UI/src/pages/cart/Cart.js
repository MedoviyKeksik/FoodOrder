import React from "react";
import {useSelector} from 'react-redux';

function Cart() {
    // TODO: Get current food list
    const food = useSelector((state) => state.root.cart);

    return (
        <h1>Cart</h1>       
    );
}

export default Cart;