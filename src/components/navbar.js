import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navContainer">
    <div>
      <nav className="navBar">
        <ul className="navBarUl">
          <li key={1}>
            <NavLink className="navLink" to="/">Books </NavLink>
          </li>
          <li key={2}>
            <NavLink className="navLink" to="/categories"> Categories </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
export default Navbar;
