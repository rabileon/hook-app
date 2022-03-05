import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          useContext
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="nav-link"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/about"
              className="nav-link"
              aria-current="page"
            >
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/login"
              className="nav-link"
              aria-current="page"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
