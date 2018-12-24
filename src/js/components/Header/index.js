import React, { Component } from 'react';
import Navigation from '../Navigation';
import Branding from './Branding';

export default class Header extends Component {
  render() {
    return (
      <header className="region-header">
        <div className="container">
          <Branding />
          <Navigation />
        </div>
      </header>
    );
  }
}
