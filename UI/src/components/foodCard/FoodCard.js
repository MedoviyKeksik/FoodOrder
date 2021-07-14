import React from "react";
import './FoodCard.scss';

function FoodCard(props) {
    return (
        <div className="food-card">
            <img alt="Food" src={props.imageSource} />
            <h3 className="food-card__title">{props.title}</h3>
            <p className="food-card__description">{props.description}</p>
            <span className="food-card__cookingTime">{props.cookingTime}</span>
            <span className="food-card__cost">{props.cost}</span>
            <button className="food-card__btn">Choose</button>
        </div>
    );
}

export default FoodCard;