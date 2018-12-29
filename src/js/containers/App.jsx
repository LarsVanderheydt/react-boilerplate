import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import "../../css/style.scss";
import Home from './home';
import Contact from './Contact';
import Login from './Login';
import User from '../components/User';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/user/:id" component={User} />

            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
