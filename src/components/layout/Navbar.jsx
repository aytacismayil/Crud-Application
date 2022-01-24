import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Recat User
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link"  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <Link className="btn btn-outline-light" to="/users/add">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
