import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from '../history'
import Home from './pages/home';
import NavBar from './navigation/nav-bar';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='container'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
