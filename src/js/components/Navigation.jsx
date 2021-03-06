import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="main_menu">
      <li><NavLink to="/home" className="menu__item" activeClassName="current_page">Home</NavLink></li>
      <li><NavLink to="/users" className="menu__item" activeClassName="current_page">Users</NavLink></li>

      <li><NavLink to="/contact" className="menu__item" activeClassName="current_page">Contact</NavLink></li>
      <li><NavLink to="/login" className="menu__item" activeClassName="current_page">Login</NavLink></li>
    </ul>
  );
};

export default Navigation;