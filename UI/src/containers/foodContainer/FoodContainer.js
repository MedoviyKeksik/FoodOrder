import React from "react";
import FoodCard from "../../components/foodCard/FoodCard";


function FoodContainer(props) {
    if (props.food == null) 
        return (<h2>No Foood!</h2>);

    let cards = props.food.map((food) => 
        <FoodCard key={food.id} title={food.title} description={food.description} />
    );
    return (
        <div className="food-container">
            {cards}
        </div>
    );
}

export default FoodContainer;