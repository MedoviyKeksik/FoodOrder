import React from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import AccountHistory from "../../components/accountHistory/AccountHistory";
import AccountInfo from "../../components/accountInfo/AccountInfo";
import { store } from "../../store";
import { getHistory } from "./actions";
import './Account.scss';


class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            countPerPage: 20,
            user: props.user
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderHistory = this.renderHistory.bind(this);
    }

    componentDidMount() {
        store.dispatch(getHistory({
            userId: this.state.user.id,
            count: this.state.countPerPage,
            offset: (this.state.activePage -  1) * this.state.countPerPage
        }));

    }

    handlePageChange(page) {
        this.setState({activePage: page});
        store.dispatch(getHistory({
            userId: this.state.user.id,
            count: this.state.countPerPage,
            offset: (page -  1) * this.state.countPerPage
        }));
    }    

    renderInfo() {
        if (this.state.user != null)
            return (
                <AccountInfo 
                    name={this.state.user.name} 
                    surname={this.state.user.surname}  
                    email={this.state.user.email}
                    phone={this.state.user.phone}
                />
            );
        else
            return (<>NO DATA</>);
    }

    renderEdit() {
        return (<></>);
    }

    renderHistory() {
        console.log("RENDER HISTORY", this.state);
        return (
            <>
                <Pagination 
                    itemClass="account__history-item"
                    activePage={this.state.activePage} 
                    totalItemsCount={(this.state.user.history != null && this.state.user.history.totalCount) || 0} 
                    onChange={this.handlePageChange} 
                    itemsCountPerPage={this.state.countPerPage}
                />
                <AccountHistory 
                    items={(this.state.user.history != null && this.state.user.history.items) || []}
                />
            </>
        );
    }

    render() {
        return (
            <>
                <h1>Account</h1>
                <ul>
                    <li><Link to="/account">Info</Link></li>
                    <li><Link to="/account/edit">Edit</Link></li>
                    <li><Link to="/account/history">History</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/account' render={this.renderInfo} />
                    <Route path='/account/edit' render={this.renderEdit} />
                    <Route path='/account/history' render={this.renderHistory} />
                </Switch>
            </>
        );
    }
}

// function Account() {
//     const user = useSelector((state) => state.root.user);
//     const [activePage, setActivePage] = useState(1); 
//     const [countPerPage, setCountPerPage] = useState(20);

// }   

export default Account;