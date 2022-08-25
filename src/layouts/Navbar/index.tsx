import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <nav className="navbar__app">
        <NavLink
          to="/"
          className="bg-gradient-to-r from-main-20  to-main-40 bg-clip-text text-2xl font-extrabold text-transparent">
          PLACEHOLDER
        </NavLink>
        <div className="navbar__list">
          <ul>
            <li>
              <NavLink to="users" className={({ isActive }) => (isActive ? 'isActive' : undefined)}>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
