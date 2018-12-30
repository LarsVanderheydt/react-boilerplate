import React, { Component } from 'react';
import Navigation from '../Navigation';
import Branding from './Branding';
import Breadcrumb from '../Breadcrumb';

class BreadcrumbClass {
  show = true;
  pathname = [];

  constructor({ show, pathname } = false) {
    this.show = show === false ? show : this.show;
    this.pathname = pathname || this.pathname;
  }
}

export default class Header extends Component {
  render() {
    const breadcrumb = new BreadcrumbClass(this.props.breadcrumb);
    
    return (
      <header className="region-header">
        <div className="container region-header__top">
          <Branding />
          <Navigation />
        </div>
        
        {breadcrumb.show !== false ? <Breadcrumb breadcrumb={breadcrumb} /> : ''}
      </header>
    );
  }
}

