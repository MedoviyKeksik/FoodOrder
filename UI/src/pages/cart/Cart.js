import React from "react";
import {useSelector} from 'react-redux';
import CartTable from "../../components/cartTable/CartTable";

function Cart() {
    const food = useSelector((state) => state.root.cart);
    console.log("CART");
    console.log(food);
    return (
        <>
            <h1>Cart</h1>      
            <CartTable food={food} />
            <button>Confirn</button>
        </> 
    );
}

export default Cart;