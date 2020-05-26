import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link to="" className="navbar-brand">
        Vidly
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
