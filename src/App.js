import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
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
        <Route component={HatPage} path="/hats" exact={true} />
        <Route component={HomePage} path="/" exact={false} />
      </Switch>
    </>
  );
}

export default App;
