import { Link, Route, Switch } from "react-router-dom";

function Account() {
    return (
        <>
            <h1>Account</h1>
            <ul>
                <li><Link to="/account">info</Link></li>
                <li><Link to="/account/edit">Edit</Link></li>
                <li><Link to="/account/history">history</Link></li>
            </ul>
            <Switch>
                <Route exact path='/account' component={} />
                <Route path='/account/edit' component={} />
                <Route path='/account/history' component={} />
            </Switch>
        </>
    );
}   

export default Account;