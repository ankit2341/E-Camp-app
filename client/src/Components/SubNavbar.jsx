import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/subnavbar.css";
import LoginForm from "./LoginForm";
import ChooseLocation from "./ChooseLocation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { LogoutSuccess } from "../Provider/actions";
import { toast } from "react-toastify";

const SubNavbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowlocation, setModalShowlocation] = useState(false);
  const userData = useSelector((store) => store.AuthReducer.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(LogoutSuccess());
        toast.success("Logout Success");
      } else {
      }
    });
  };

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
            {userData === "" ? (
              <Link onClick={() => setModalShow(true)}>Login</Link>
            ) : (
              <Link
                onClick={handleLogout}
                style={{
                  width: "10%",
                  overflowX: "hidden",
                  background: "#fff",
                  color: "#222",
                  borderRadius: "20px",
                }}
              >
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                    borderRadius: "50%",
                  }}
                  src={userData.avatar}
                  alt=""
                />
                {userData.username}
              </Link>
            )}
          </li>
          <li>
            <Link onClick={() => setModalShowlocation(true)}>
              Choose location
            </Link>
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
                {userData === "" ? (
                  <Link onClick={() => setModalShow(true)}>Login</Link>
                ) : (
                  <Link
                    onClick={handleLogout}
                  >
                    <img
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                        borderRadius: "50%",
                      }}
                      src={userData.avatar}
                      alt=""
                    />
                    {userData.username}
                  </Link>
                )}
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
