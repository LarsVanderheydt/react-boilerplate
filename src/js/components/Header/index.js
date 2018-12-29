import React, { Component } from 'react';
import Navigation from '../Navigation';
import Branding from './Branding';
import Breadcrumb from '../Breadcrumb';

export default class Header extends Component {
  render() {
    return (
      <header className="region-header">
        <div className="container region-header__top">
          <Branding />
          <Navigation />
        </div>
        <Breadcrumb />

      </header>
    );
  }
}
