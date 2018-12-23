import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Link className="navigation__home" to="/home">Home</Link>
      </div>
    );
  }
}
