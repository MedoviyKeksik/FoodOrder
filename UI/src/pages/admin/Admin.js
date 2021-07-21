import FoodForm from "../../containers/foodForm/FoodForm";
import { Link, Route, Switch } from 'react-router-dom';

function Admin() {
    return (
        <>
            <ul>
                <li><Link to="/admin/add">Add</Link></li>
                <li><Link to="/admin/edit">Edit</Link></li>
            </ul>
            <Switch>
                <Route path="/admin/add" component={FoodForm}/>
            </Switch>
        </>
    );
}

export default Admin;