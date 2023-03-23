import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar.css";
import LoginForm from "./LoginForm";

const NavbarMain = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
            <Link onClick={() => setModalShow(true)}>Login</Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar_full_ipad" >
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
              <NavDropdown.Item>
                {" "}
                <Link to="/explore">Explore</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/blogs">Blogs</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/events">Events</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link onClick={() => setModalShow(true)}>Login</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
      <LoginForm  show={modalShow}
        onHide={() => setModalShow(false)}/>
        
    </>
  );
};

export default NavbarMain;
