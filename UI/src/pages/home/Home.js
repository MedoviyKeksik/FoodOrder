import FoodCard from "../../components/foodCard/FoodCard";
import Pagination from "react-js-pagination";
import { Component } from "react";

const itemsPerPage = [10, 20, 50];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 20
        }

        this.getGlobalId = this.getGlobalId.bind(this);
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
        var options = itemsPerPage.map((number) => <option val={number}>{number}</option>)
        var foodCards = [];
        for (let i = 0; i < this.state.itemsCountPerPage; i++) foodCards.push(<FoodCard title={"Food: " + this.getGlobalId(i)} description="So tasty!" cookingTime="2 mins" cost="$300"/>);
        return (
            <>
                <h1>Home</h1>
                <select value={this.state.itemsCountPerPage} onChange={this.handleItemsPerPage.bind(this)}>
                    {options}
                </select>
                <Pagination activePage={this.state.activePage} itemsCountPerPage={this.state.itemsCountPerPage} totalItemsCount={450} onChange={this.handlePageChange.bind(this)} pageRangeDisplayed={5} />
                {foodCards}               
            </>
        );
    };
}

export default Home;