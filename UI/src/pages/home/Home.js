import FoodCard from "../../components/foodCard/FoodCard";
import Pagination from "react-js-pagination";
import { Component } from "react";
import { store } from '../../app/store';
import { all } from "redux-saga/effects";
import { FormattedMessage } from "react-intl";

const itemsPerPage = [
    {
        value: 20,
        title: 20
    },
    {
        value: 50,
        title: 50
    },
    {
        value: 100,
        title: 100
    },
    {
        value: 100000000, // This value will be updated later
        title: 'all'
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItemsCount: 100,
            activePage: 1,
            itemsCountPerPage: 20,
            foodCards: []
        }

        this.getGlobalId = this.getGlobalId.bind(this);
        
        this.options = itemsPerPage.map((data) => <option value={data.value}>{data.title}</option>)
        this.handleCardsChange = this.handleCardsChange.bind(this);
        store.subscribe(this.handleCardsChange);

        
    }

    componentDidMount() {
        store.dispatch({type: 'FOOD_CARDS_REQUESTED'});
    }

    handleCardsChange() {
        this.setState({
            foodCards: store.getState().food.items,
            totalItemsCount: store.getState().food.totalCount
        });
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    handleItemsPerPage(e) {
        this.setState({
            activePage: 1,
            itemsCountPerPage: Number(e.target.value)
        });
    }

    getGlobalId(index) {
        return (this.state.activePage - 1) * this.state.itemsCountPerPage + index;
    }

    render() {
        var cards = this.state.foodCards.map((data => <FoodCard title={data.title} description={data.description} />));
        return (
            <>
                <h1>Home</h1>
                <select value={this.state.itemsCountPerPage} onChange={this.handleItemsPerPage.bind(this)}>
                    {this.options}
                </select>
                <Pagination activePage={this.state.activePage} itemsCountPerPage={this.state.itemsCountPerPage} totalItemsCount={this.state.totalItemsCount} onChange={this.handlePageChange.bind(this)} pageRangeDisplayed={5} />
                {cards}               
            </>
        );
    };
}

export default Home;