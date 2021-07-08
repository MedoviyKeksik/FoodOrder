import React from "react";

function FoodCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.imageSource} />
            <span>{props.cookingTime}</span>
            <span>{props.cost}</span>
            <button>Add</button>
        </div>
    );
}

export default FoodCard;