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
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderHistory = this.renderHistory.bind(this);
        this.handleHistoryClick = this.handleHistoryClick.bind(this);
        this.props.loadLocalization(localization);
    }

    handleHistoryClick() {
        if (this.props.user != null) {
            this.props.getHistory({
                userId: this.props.user.id,
                count: this.state.countPerPage,
                offset: (this.state.activePage -  1) * this.state.countPerPage
            });
        }
    }

    handlePageChange(page) {
        this.props.getHistory({
            userId: this.props.user.id,
            locale: this.props.locale,
            count: this.state.countPerPage,
            offset: (page -  1) * this.state.countPerPage
        });
    }    

    renderInfo() {
        return (
            <AccountInfo 
                name={this.props.user.name} 
                surname={this.props.user.surname}  
                email={this.props.user.email}
                phone={this.props.user.phone}
            />
        );
    }

    renderHistory() {
        console.log("RENDER_HISTORY", this.props.user.history, this.props.user);
        if (this.props.user.history == null) {
            return (<div className="account__nodata"><FormattedMessage defaultMessage="No data" id={FOODORDER_ACCOUNT_NODATA} /></div>);
        } else {
            return (
                <>
                    <Pagination 
                        itemClass="account__history-item"
                        activePage={this.state.activePage} 
                        totalItemsCount={this.props.user.history.totalCount} 
                        onChange={this.handlePageChange} 
                        itemsCountPerPage={this.state.countPerPage}
                    />
                    <AccountHistory 
                        items={this.props.user.history.items}
                    />
                </>
            );
        }
    }

    render() {
        if (this.props.user == null) {
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
        user: state.root.user,
        locale: state.localizer.locale
    };
}

const mapDispatchToProps = {
    loadLocalization,
    getHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);