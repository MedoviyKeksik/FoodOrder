import Pagination from "react-js-pagination";
import { Component } from "react";
import FoodContainer from "../../containers/foodContainer/FoodContainer";
import './Home.scss';
import { requestFood } from "./actions";
import { connect } from "react-redux";
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            itemsCountPerPage: itemsPerPage[0].value
        }
        
        this.options = itemsPerPage.map((data) => <option value={data.value}>{data.title}</option>);
    }

    componentDidMount() {
        this.props.requestFood({
            count: this.state.itemsCountPerPage, 
            offset: (this.state.activePage - 1) * this.state.itemsCountPerPage,
            locale: this.props.locale
        });
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.locale !== this.props.locale) {
            this.props.requestFood({
                count: this.state.itemsCountPerPage, 
                offset: (this.state.activePage - 1) * this.state.itemsCountPerPage,
                locale: this.props.locale
            });
        }
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        this.props.requestFood({
            count: this.state.itemsCountPerPage, 
            offset: (pageNumber - 1) * this.state.itemsCountPerPage,
            locale: this.props.locale
        });
    }

    handleItemsPerPage(e) {
        this.setState({
            activePage: 1,
            itemsCountPerPage: Number(e.target.value)
        });
        this.props.requestFood({
            count: Number(e.target.value), 
            offset: 0,
            locale: this.props.locale
        });
    }

    render() {
        return (
            <div className="home">
                <div className="home__pagination-row">
                    <select 
                        className="home__pagination-count" 
                        value={this.state.itemsCountPerPage} 
                        onChange={this.handleItemsPerPage.bind(this)}
                    >
                        {this.options}
                    </select>
                    <Pagination 
                        innerClass="home__pagination"
                        itemClass="home__pagination-item" 
                        linkClass="home__pagination-link"
                        activeClass="home__pagination-active"
                        activePage={this.state.activePage} 
                        itemsCountPerPage={this.state.itemsCountPerPage} 
                        totalItemsCount={this.props.totalItemsCount} 
                        onChange={this.handlePageChange.bind(this)} 
                        firstPageText={<FontAwesomeIcon icon={faCaretLeft} />}
                        prevPageText={<FontAwesomeIcon icon={faChevronLeft} />}
                        nextPageText={<FontAwesomeIcon icon={faChevronRight} />}
                        lastPageText={<FontAwesomeIcon icon={faCaretRight} />}
                        pageRangeDisplayed={5} 
                    />
                </div>
                <FoodContainer 
                    food={this.props.foodCards} 
                    isAuthorized={this.props.isAuthorized} 
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        locale: state.localizer.locale,
        isAuthorized: !!state.root.user,
        totalItemsCount: state.food.totalCount,
        foodCards: state.food.items
    };
};

const mapDispatchToProps = {
    requestFood
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);