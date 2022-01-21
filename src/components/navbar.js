import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from './user.png';

const Navbar = () => (
  <div className="navContainer">
    <div className="nav_div">
      <nav className="navBar">
        <ul className="navBarUl">
          <li key={0}><p className="heading">BookstoreCMS</p></li>
          <li key={1}>
            <NavLink className="navLink" to="/">Books </NavLink>
          </li>
          <li key={2}>
            <NavLink className="navLink" to="/categories"> Categories </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="profile_icon"><img alt="profile" src={profile} /></div>
  </div>
);
export default Navbar;
