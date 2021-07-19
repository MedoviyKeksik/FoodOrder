import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'; 
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Admin from './pages/admin/Admin';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';

function App() {
  const locale = useSelector((state) => state.localizer);
  const user = useSelector((state) => state.root.user);

  return (
    <>
      <div className="App">
        <IntlProvider locale={locale.locale} messages={locale.messages[locale.locale]}>
          <Header user={user} />
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
