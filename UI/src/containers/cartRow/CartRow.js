import { useState } from "react";
import { store } from "../../store";
import { removeCartItem } from "./actions";


function CartRow(props) {
    const [count, setCount] = useState(props.count);

    function handleCountChange(e) {
        if (e.target.value > 0)
            setCount(e.target.value);
    }

    function handleRemove() {
        store.dispatch(removeCartItem({
            Id: props.FoodId
        }));
    }

    return (
        <tr>
            <td><img src={props.imageSource} /></td>
            <td>{props.title}</td>
            <td><input type="number" value={count} onChange={handleCountChange} /></td>
            <td>{count * props.cost}</td>
            <td>{props.time}</td>
            <td><button onClick={handleRemove}>Remove</button></td>
        </tr>
    );
}

export default CartRow;