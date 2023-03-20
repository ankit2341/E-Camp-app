import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar.css";

const NavbarMain = () => {
  return (
    <>
      <nav className="navbar_full">
        <Link to="/" className="logo">
          ECamp
        </Link>
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
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar_full_ipad">
        <Link to="/" className="logo">
          ECamp
        </Link>
        <ul>
          <li>
            <NavDropdown
              className="nav_ipad"
              id="nav-dropdown-dark-example"
              title="MENU"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMain;
