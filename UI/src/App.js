import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Account from './pages/Account';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/account" component={Account}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
