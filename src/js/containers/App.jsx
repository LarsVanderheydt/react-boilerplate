import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import "../../css/style.scss";
import Home from './home';
import Contact from './Contact';


export default class App extends Component {
  componentDidMount() {
    fetch('/api/example').then(d => d.json())
    .then(data => console.log(data));
  }

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
