import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { string } from 'prop-types';

import DevTools from 'mobx-react-devtools';
import { inject, observer, PropTypes } from 'mobx-react';

import Home from './home';

export default class App extends Component {

    renderHome() {
        return <Home />;
    }

    render() {
        return (
            <section>

                {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

                <Router>
                    <Switch>
                        <Route exact path='/home' render={this.renderHome} />
                        <Route render={() => <Redirect to='/home' />} />
                    </Switch>
                </Router>

            </section>
        );
    }
}