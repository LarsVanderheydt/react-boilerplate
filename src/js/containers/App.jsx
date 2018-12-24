import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import "../../css/style.scss";
import Home from './home';
import Contact from './Contact';


export default class App extends Component {


  render() {
    return (
      <React.Fragment>


        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />

            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
