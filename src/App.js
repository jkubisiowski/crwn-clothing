import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact={true} />
        <Route component={ShopPage} path="/shop" exact={false} />
        <Route component={SignInAndSignUpPage} path="/signin" exact={false} />
      </Switch>
    </>
  );
}

export default App;
