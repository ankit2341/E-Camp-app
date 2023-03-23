import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/subnavbar.css";
import LoginForm from "./LoginForm";
import ChooseLocation from "./ChooseLocation";

const SubNavbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowlocation, setModalShowlocation] = useState(false);

  return (
    <>
      <nav className="navbar_full_subnav">
        <Link to="/" className="logo_subnav">
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
          <li>
            <Link onClick={() => setModalShowlocation(true)}>Choose location</Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar_full_ipad_subnav">
        <Link to="/" className="logo_subnav">
          ECamp
        </Link>
        <ul>
          <li>
            <NavDropdown
              className="nav_ipad_subnav"
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
                <Link onClick={() => setModalShowlocation(true)}>
                  Choose Location
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link onClick={() => setModalShow(true)}>Login</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
      <LoginForm show={modalShow} onHide={() => setModalShow(false)} />
      <ChooseLocation
        show={modalShowlocation}
        onHide={() => setModalShowlocation(false)}
      />
    </>
  );
};

export { SubNavbar };
