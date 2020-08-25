import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/">
            Home
          </Link>
        </li>
        {/* <li className="menu__item">
          <Link className="menu__link" to="/signin">
            Sign in
          </Link>
        </li> */}
        {/* <li className="menu__item">
          <Link className="menu__link" to="/register">
            Sign up
          </Link>
        </li> */}
        <li className="menu__item">
          <Link className="menu__link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
