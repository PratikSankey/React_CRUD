import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light w-30 m-2" to="/Adduser">
         Register Here
        </Link>
        
      </div>
    </nav>
  );
};
export default Navbar;
