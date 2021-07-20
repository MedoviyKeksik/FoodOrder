import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { loadLoclization } from "../../containers/localeSwitcher/actions";
import { store } from "../../store";
import Modal from "../Modal/Modal";
import { addFoodToCart } from "./actions";
import { FOODORDER_FOODADDMODAL_ADDBUTTON, FOODORDER_FOODADDMODAL_CONFIRNBUTTON } from "./constants";
import localization from './messages';


store.dispatch(loadLoclization(localization));

function FoodAddModal(props) {
    let [count, setCount] = useState(1);
    function handleConfirmation() {
        store.dispatch(addFoodToCart({
            title: props.title
        }));
    }
    function handleCountChange(e) {
        console.log(e.target.value);
        setCount(e.target.value);
    }
    let content;
    if (props.isAuthorized) {
        content = <>
            <img alt="Food" src={props.imageSource} />
            <h3 className="food-card__title">{props.title}</h3>
            <p className="food-card__description">{props.description}</p>
            <span className="food-card__cookingTime">{props.cookingTime}</span>
            <span className="food-card__cost">{props.cost}</span>
            <input value={count} type="number" onChange={handleCountChange} />
            <button onClick={handleConfirmation}><FormattedMessage defaultMessage="Confirn" id={FOODORDER_FOODADDMODAL_CONFIRNBUTTON}/></button>
        </>
    } else {
        content = <>
            <h3>Please authorize</h3>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>;
    }
    return (
        <Modal buttonTitle={
            <FormattedMessage 
                defaultMessage="Add to cart" 
                id={FOODORDER_FOODADDMODAL_ADDBUTTON}
            />
        }>
            {content}
        </Modal>
    );
}

export default FoodAddModal;