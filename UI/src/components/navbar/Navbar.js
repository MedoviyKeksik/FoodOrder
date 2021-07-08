import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    );
}

export default Navbar;