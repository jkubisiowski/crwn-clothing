import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" exact={true} />
        <Route component={ShopPage} path="/shop" exact={false} />
      </Switch>
    </>
  );
}

export default App;
