import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import "../../css/style.scss";
import Home from './home';
import Navigation from './Navigation';

export default class App extends Component {
  renderHome() {
    return <Home />;
  }

  render() {
    return (
      <section className="container">
        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}


        <BrowserRouter>
          <Switch>
            <Route exact path="/home" render={this.renderHome} />
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
