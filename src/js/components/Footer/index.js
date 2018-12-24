import React, { Component } from 'react';
import Navigation from '../Navigation';
export default class Footer extends Component {
  render() {
    return (
      <footer className="region-footer">
        <div className="container">
          <Navigation />
        </div>
      </footer>
    );
  }
}
