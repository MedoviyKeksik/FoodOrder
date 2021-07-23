import React from "react";
import { FormattedMessage } from "react-intl";
import { loadLoclization } from "../../containers/localeSwitcher/actions";
import { store } from "../../store";
import FoodAddModal from "../foodAddModal/FoodAddModal";
import { FOODORDER_FOODCARD_ADDBUTTON, FOODORDER_FOODCARD_COST, FOODORDER_FOODCARD_TIME } from "./constants";
import './FoodCard.scss';
import localization from './messages'

store.dispatch(loadLoclization(localization));

function FoodCard(props) {
    return (
        <div className="food-card">
            <img className="food-card__image" alt="Food" src={props.imageSource} />
            <h3 className="food-card__title">{props.title}</h3>
            <p className="food-card__description">{props.description}</p>
            <span className="food-card__cooking-time"><FormattedMessage defaultMessage="Time: " id={FOODORDER_FOODCARD_TIME} />{props.cookingTime}</span>
            <span className="food-card__cost"><FormattedMessage defaultMessage="Cost: " id={FOODORDER_FOODCARD_COST} />{props.cost}</span>
            <FoodAddModal 
                trigger={<button className="food-card__button"><FormattedMessage defaultMessage="Add to cart" id={FOODORDER_FOODCARD_ADDBUTTON} /></button>}
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