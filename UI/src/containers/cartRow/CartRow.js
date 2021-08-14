import { useState } from "react";
import { removeCartItem, updateCartItem } from "./actions";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function CartRow(props) {
    const [itemCount, setItemCount] = useState(props.count);

    function handleCountChange(e) {
        if (e.target.value > 0) {
            setItemCount(e.target.value);        
            props.updateCartItem({
                id: props.id,
                count: e.target.value
            });
        }
    }

    function handleRemove() {
        props.removeCartItem({
            id: props.id
        });
    }
    
    return (
        <tr>
            <td><img src={props.imageSource} alt="Pizza" /></td>
            <td>{props.title}</td>
            <td><input type="number" value={itemCount} onChange={handleCountChange} /></td>
            <td>{itemCount * props.cost}</td>
            <td>{props.cookingTime}</td>
            <td><button onClick={handleRemove}>Remove</button></td>
        </tr>
    );
}

CartRow.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    imageSource: PropTypes.string,
    cookingTime: PropTypes.number
};

const mapDispatchToProps = {
    updateCartItem,
    removeCartItem
}

export default connect(null, mapDispatchToProps)(CartRow);