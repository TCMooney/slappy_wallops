import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from '../history'
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
