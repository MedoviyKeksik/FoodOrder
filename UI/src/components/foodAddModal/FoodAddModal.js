import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { loadLocalization } from "../../containers/localeSwitcher/actions";
import Modal from "../modal/Modal";
import NeedAuthModal from "../needAuthModal/NeedAuthModal";
import { addFoodToCart } from "./actions";
import { FOODORDER_FOODADDMODAL_CONFIRNBUTTON } from "./constants";
import localization from './messages';
import './FoodAddModal.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FoodAddModal(props) {
    props.loadLoclization(localization);
    let [count, setCount] = useState(1);

    function handleConfirmation() {
        props.addFoodToCart({
            foodId: props.id,
            title: props.title,
            count: count,
            cost: props.cost,
            imageSource: props.imageSource,
            cookingTime: props.cookingTime,
        });
    }

    function handleCountChange(e) {
        setCount(e.target.value);
    }

    if (props.isAuthorized) {
        return (
            <Modal trigger={props.trigger}>
                <div className="modal-add">
                    <img className="modal-add__image" alt="Food" src={props.imageSource} />
                    <div className="modal-add__info">
                        <h3 className="modal-add__title">{props.title}</h3>
                        <p className="modal-add__description">{props.description}</p>
                        <span className="modal-add__cooking-time">{props.cookingTime}</span>
                        <span className="modal-add__cost">{props.cost}</span>
                        <input value={count} type="number" className="modal-add__count" onChange={handleCountChange} />
                        <button className="modal-add__button" onClick={handleConfirmation}><FormattedMessage defaultMessage="Confirn" id={FOODORDER_FOODADDMODAL_CONFIRNBUTTON}/></button>
                    </div>
                </div>
            </Modal>
        );
    } else {
        return (<NeedAuthModal trigger={props.trigger} />);
    }
}

FoodAddModal.propTypes = {
    trigger: PropTypes.element.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    cost: PropTypes.number.isRequired,
    imageSource: PropTypes.string,
    cookingTime: PropTypes.number
}

const mapDispatchToProps = {
    loadLoclization: loadLocalization,
    addFoodToCart
}

export default connect(null, mapDispatchToProps)(FoodAddModal);