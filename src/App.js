import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import './index.css';

const hist = createBrowserHistory();

const App = () => (
  <div style={{ height: '100vh' }}>
    <Suspense fallback="loading">
    <Router history={hist}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Suspense>
  </div>
);

export default  App;
 
