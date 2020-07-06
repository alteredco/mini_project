import React from 'react';
import './App.scss';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import PaidPage from './PaidPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route  path="/" component={LandingPage} exact />
      <Route  path="/paid" component={PaidPage} />
    </Switch>
    </div>
  );
}

export default App;
