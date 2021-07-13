import './App.css';
import { Switch, Route } from 'react-router-dom';
import Localizer from './features/localizer/Localizer';
import { store } from './app/store';
import { IntlProvider } from 'react-intl';

import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'; 
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Admin from './pages/admin/Admin';
import { useSelector } from 'react-redux';


function App() {
  const locale = useSelector(state => state.localizer.locale);

  return (
    <>
      <div className="App">
        <IntlProvider locale={locale} messages={store.getState().localizer.language}>
          <Localizer locale={locale} />
          {/* <FormattedMessage id="app.content" defaultMessage="default message?" /> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/account" component={Account}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/admin" component={Admin}/>
          </Switch>
        </IntlProvider>
        
      </div>
    </>
  );
}


export default App;
