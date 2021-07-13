import { Link, Switch } from "react-router-dom";

function Account() {
    return (
        <>
            <h1>Account</h1>
            <ul>
                <li><Link to="/account/info">info</Link></li>
                <li><Link to="/account/history">history</Link></li>
            </ul>
            <Switch>
            </Switch>
        </>
    );
}   

export default Account;