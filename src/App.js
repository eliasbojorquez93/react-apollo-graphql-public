import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ROUTES from './config/routes';
import Header from './components/commons/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        { ROUTES.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />) }
      </Switch>
    </Router>
  );
}

export default App;
