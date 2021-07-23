import { useState } from "react";
import { store } from "../../store";
import { removeCartItem, updateCartItem } from "./actions";


function CartRow(props) {
    const [itemCount, setItemCount] = useState(props.count);

    function handleCountChange(e) {
        if (e.target.value > 0) {
            setItemCount(e.target.value);        
            store.dispatch(updateCartItem({
                id: props.id,
                count: e.target.value
            }));
        }
    }

    function handleRemove() {
        store.dispatch(removeCartItem({
            id: props.id
        }));
    }
    
    return (
        <tr>
            <td><img src={props.imageSource} /></td>
            <td>{props.title}</td>
            <td><input type="number" value={itemCount} onChange={handleCountChange} /></td>
            <td>{itemCount * props.cost}</td>
            <td>{props.cookingTime}</td>
            <td><button onClick={handleRemove}>Remove</button></td>
        </tr>
    );
}

export default CartRow;