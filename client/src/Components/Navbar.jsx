import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar_full">
      <Link to="/" className="logo">ECamp</Link>
      <ul>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
