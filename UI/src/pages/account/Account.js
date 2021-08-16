import React from "react";
import Pagination from "react-js-pagination";
import { Link, Route, Switch } from "react-router-dom";
import AccountHistory from "../../components/accountHistory/AccountHistory";
import AccountInfo from "../../components/accountInfo/AccountInfo";
import { getHistory } from "./actions";
import './Account.scss';
import { FormattedMessage } from "react-intl";
import { FOODORDER_ACCOUNT_HISTORY, FOODORDER_ACCOUNT_INFO, FOODORDER_ACCOUNT_NODATA, FOODORDER_ACCOUNT_PLSLOGIN } from "./constants";
import {connect} from 'react-redux';
import { loadLocalization } from "../../containers/localeSwitcher/actions";
import localization from "./messages";

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
        this.renderHistory = this.renderHistory.bind(this);
        this.handleHistoryClick = this.handleHistoryClick.bind(this);
        this.props.loadLocalization(localization);
    }

    handleHistoryClick() {
        if (this.state.user != null) {
            this.props.getHistory({
                userId: this.state.user.id,
                count: this.state.countPerPage,
                offset: (this.state.activePage -  1) * this.state.countPerPage
            });
        }
    }

    handlePageChange(page) {
        this.props.dispatch({
            userId: this.state.user.id,
            count: this.state.countPerPage,
            offset: (page -  1) * this.state.countPerPage
        });
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

    renderHistory() {
        if (this.state.user.history == null) {
            return (<div className="account__nodata"><FormattedMessage defaultMessage="No data" id={FOODORDER_ACCOUNT_NODATA} /></div>);
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
            return (
                <div className="account">
                    <h2><FormattedMessage defaultMessage="Please login first" id={FOODORDER_ACCOUNT_PLSLOGIN} /></h2>
                </div>
            );
        } else {
            return (
            <div className="account"> 
                <ul className="account__navbar">
                    <li className="account__navbar-item"><Link className="account__navbar-link" to="/account"><FormattedMessage defaultMessage="Info" id={FOODORDER_ACCOUNT_INFO} /></Link></li>
                    <li className="account__navbar-item"><Link className="account__navbar-link" to="/account/history" onClick={this.handleHistoryClick}><FormattedMessage defaultMessage="History" id={FOODORDER_ACCOUNT_HISTORY} /></Link></li>
                </ul>
                <Switch>
                    <Route exact path='/account' render={this.renderInfo} />
                    <Route path='/account/edit' render={this.renderEdit} />
                    <Route path='/account/history' render={this.renderHistory} />
                </Switch>
            </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.root.user
    };
}

const mapDispatchToProps = {
    loadLocalization,
    getHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);