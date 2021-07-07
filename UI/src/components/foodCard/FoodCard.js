import React from "react";

function FoodCart(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.imageSource} />
            <span>{props.cookingTime}</span>
            <span>{props.cost}</span>
        </div>
    );
}

export default FoodCart;