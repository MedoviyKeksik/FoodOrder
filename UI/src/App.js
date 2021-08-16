import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'; 
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Admin from './pages/admin/Admin';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    const locale = useSelector((state) => state.localizer);
    const user = useSelector((state) => state.root.user);
    const cart = useSelector((state) => state.root.cart);

    return (
        <>
        <div className="App">
            <IntlProvider locale={locale.locale} messages={locale.messages[locale.locale]}>
            <Header user={user} locale={locale.locale} cartCount={cart.length} />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login">
                    {
                        user != null ? 
                            <Redirect to="/" /> :        
                            <Login />
                    }
                </Route>
                <Route path="/register">
                    {
                        user != null ?
                            <Redirect to="/" /> :
                            <Register />
                    }
                </Route>
                <Route path="/account">
                    <Account user={user} />
                </Route>
                <Route path="/cart" component={Cart}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
            <Footer />
            </IntlProvider>
        </div>
        </>
    );
}


export default App;
