import React from "react";
import { FormattedMessage } from "react-intl";
import FoodCard from "../../components/foodCard/FoodCard";
import { store } from "../../store";
import { loadLoclization } from "../localeSwitcher/actions";
import { FOODORDER_FOODCONTAINER_NOFOOD } from "./constants";
import localization from './messages';
import './FoodContainer.scss';

store.dispatch(loadLoclization(localization));

function FoodContainer(props) {
    if (props.food == null) 
        return (<h2><FormattedMessage defaultMessage="No Foood!" id={FOODORDER_FOODCONTAINER_NOFOOD} /></h2>);

    let cards = props.food.map((food) => 
        <FoodCard 
            key={food.id} 
            title={food.title} 
            description={food.description} 
            cookingTime={food.cookingTime}
            cost={food.cost}
            imageSource={food.imageSource}
            isAuthorized={props.isAuthorized}
        />
    );
    return (
        <div className="food-container">
            {cards}
        </div>
    );
}

export default FoodContainer;