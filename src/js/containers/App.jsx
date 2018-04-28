import React, { Component } from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import { string } from 'prop-types';

import DevTools from 'mobx-react-devtools';
import { inject, observer, PropTypes } from 'mobx-react';

import css from '../../css/style';

import Home from './home';

export default class App extends Component {
  renderHome() {
    return <Home />;
  }

  render() {
    return (
      <section>
        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <HashRouter>
          <Switch>
            <Route exact path="/home" render={this.renderHome} />
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </HashRouter>
      </section>
    );
  }
}
