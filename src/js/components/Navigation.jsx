import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="main_menu">
      <li><NavLink to="/home" className="menu__item" activeClassName="current_page">Home</NavLink></li>
      <li><NavLink to="/contact" className="menu__item" activeClassName="current_page">Contact</NavLink></li>
    </ul>
  );
};

export default Navigation;