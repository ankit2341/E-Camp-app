import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar.css";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LogoutSuccess } from "../Provider/actions";
import swal from "sweetalert";

const NavbarMain = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
                {userData === "" ? (
                  <Link onClick={() => setModalShow(true)}>Login</Link>
                ) : (
                  <Link onClick={handleLogout} style={{ overflow: "hidden" }}>
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
    </>
  );
};

export default NavbarMain;
