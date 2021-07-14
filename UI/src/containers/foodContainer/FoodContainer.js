import React from "react";
import FoodCard from "../../components/foodCard/FoodCard";
import { store } from "../../store";
import { requestFood } from "./actions";

class FoodContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            food: []
        }

        this.handleFoodChange = this.handleFoodChange.bind(this);

        store.subscribe(this.handleFoodChange);
    }

    componentDidMount() {
        store.dispatch(requestFood());
    }

    handleFoodChange() {
        this.setState({
            food: store.getState().food.items,
            totalItemsCount: store.getState().food.totalCount
        });
    }

    render() {
        let cards = this.state.food.map((food) => 
            <FoodCard key={food.id} title={food.title} description={food.description} />
        );
        return (
            <div className="food-container">
                {cards}
            </div>
        );
    }
}

export default FoodContainer;