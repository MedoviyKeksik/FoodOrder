import React from "react";
import { FormattedMessage } from "react-intl";
import FoodCard from "../../components/foodCard/FoodCard";
import { loadLoclization } from "../localeSwitcher/actions";
import { FOODORDER_FOODCONTAINER_NOFOOD } from "./constants";
import localization from './messages';
import './FoodContainer.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FoodContainer(props) {
    props.loadLoclization(localization);

    if (props.food == null) 
        return (<h2><FormattedMessage defaultMessage="No Foood!" id={FOODORDER_FOODCONTAINER_NOFOOD} /></h2>);

    let cards = props.food.map((food) => 
        <FoodCard 
            key={food.id} 
            id={food.id}
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

FoodContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    cookingTime: PropTypes.number,
    cost: PropTypes.number.isRequired,
    imageSource: PropTypes.string,
    isAuthorized: PropTypes.bool.isRequired
};

const mapDispatchToProps = {
    loadLoclization
};

export default connect(null, mapDispatchToProps)(FoodContainer);