import React from "react";
import { FormattedMessage } from "react-intl";
import FoodAddModal from "../foodAddModal/FoodAddModal";
import Modal from "../modal/Modal";
import { FOODORDER_FOODCARD_ADDBUTTON } from "./constants";
import './FoodCard.scss';

function FoodCard(props) {
    return (
        <div className="food-card">
            <img alt="Food" src={props.imageSource} />
            <h3 className="food-card__title">{props.title}</h3>
            <p className="food-card__description">{props.description}</p>
            <span className="food-card__cookingTime">{props.cookingTime}</span>
            <span className="food-card__cost">{props.cost}</span>
            {/* <button className="food-card__btn">Choose</button> */}
            <FoodAddModal 
                trigger={<button><FormattedMessage defaultMessage="Add to cart" id={FOODORDER_FOODCARD_ADDBUTTON} /></button>}
                imageSource={props.imageSource} 
                title={props.title}
                description={props.description}
                cookingTime={props.cookingTime}
                cost={props.cost}
                isAuthorized={props.isAuthorized}
            />
        </div>
    );
}

export default FoodCard;