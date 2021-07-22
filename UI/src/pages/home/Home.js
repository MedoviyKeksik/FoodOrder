import FoodCard from "../../components/foodCard/FoodCard";
import Pagination from "react-js-pagination";
import { Component } from "react";
import { store } from '../../store';
import { all } from "redux-saga/effects";
import { FormattedMessage } from "react-intl";
import FoodContainer from "../../containers/foodContainer/FoodContainer";
import './Home.scss';
import { requestFood } from "./actions";

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
            totalItemsCount: 0,
            activePage: 1,
            itemsCountPerPage: itemsPerPage[0].value,
            foodCards: [],
            isAuthorized: false
        }

        this.getGlobalId = this.getGlobalId.bind(this);
        
        this.options = itemsPerPage.map((data) => <option value={data.value}>{data.title}</option>);   
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    componentDidMount() {
        store.subscribe(this.handleStoreChange);
        store.dispatch(requestFood({
            count: this.state.itemsCountPerPage, 
            offset: (this.state.activePage - 1) * this.state.itemsCountPerPage
        }));
    }

    handleStoreChange() {
        this.setState({
            foodCards: store.getState().food.items, 
            totalItemsCount: store.getState().food.totalCount,
            isAuthorized: store.getState().root.user
        });
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        store.dispatch(requestFood({
            count: this.state.itemsCountPerPage, 
            offset: (pageNumber - 1) * this.state.itemsCountPerPage
        }));
    }


    handleItemsPerPage(e) {
        this.setState({
            activePage: 1,
            itemsCountPerPage: Number(e.target.value)
        });
        store.dispatch(requestFood({
            count: Number(e.target.value), 
            offset: 0
        }));
    }

    getGlobalId(index) {
        return (this.state.activePage - 1) * this.state.itemsCountPerPage + index;
    }

    render() {
        return (
            <div className="home">
                <div className="home__pagination-row">
                    <select value={this.state.itemsCountPerPage} onChange={this.handleItemsPerPage.bind(this)}>
                        {this.options}
                    </select>
                    <Pagination itemClass="home__pagination-item" activePage={this.state.activePage} itemsCountPerPage={this.state.itemsCountPerPage} totalItemsCount={this.state.totalItemsCount} onChange={this.handlePageChange.bind(this)} pageRangeDisplayed={5} />
                </div>
                <FoodContainer food={this.state.foodCards} isAuthorized={this.state.isAuthorized} />
            </div>
        );
    };
}

export default Home;