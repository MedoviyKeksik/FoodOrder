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

        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderHistory = this.renderHistory.bind(this);
        this.handleHistoryClick = this.handleHistoryClick.bind(this);
    }

    handleStoreChange() {
        this.setState({user: store.getState().root.user});
    }

    handleHistoryClick() {
        if (this.state.user != null) {
            store.dispatch(getHistory({
                userId: this.state.user.id,
                count: this.state.countPerPage,
                offset: (this.state.activePage -  1) * this.state.countPerPage
            }));
        }
    }

    handlePageChange(page) {
        store.dispatch(getHistory({
            userId: this.state.user.id,
            count: this.state.countPerPage,
            offset: (page -  1) * this.state.countPerPage
        }));
    }    

    renderInfo() {
        return (
            <AccountInfo 
                name={this.state.user.name} 
                surname={this.state.user.surname}  
                email={this.state.user.email}
                phone={this.state.user.phone}
            />
        );
    }

    renderEdit() {
        return (<></>);
    }

    renderHistory() {
        if (this.state.user.history == null) {
            return (<>No data</>);
        } else {
            return (
                <>
                    <Pagination 
                        itemClass="account__history-item"
                        activePage={this.state.activePage} 
                        totalItemsCount={this.state.user.history.totalCount} 
                        onChange={this.handlePageChange} 
                        itemsCountPerPage={this.state.countPerPage}
                    />
                    <AccountHistory 
                        items={this.state.user.history.items}
                    />
                </>
            );
        }
    }

    render() {
        if (this.state.user == null) {
            return (<h2>Please login first</h2>);
        } else {
            return (
            <>
                <h1>Account</h1>
                <ul>
                    <li><Link to="/account">Info</Link></li>
                    {/* <li><Link to="/account/edit">Edit</Link></li> */}
                    <li><Link to="/account/history" onClick={this.handleHistoryClick}>History</Link></li>
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
}

export default Account;