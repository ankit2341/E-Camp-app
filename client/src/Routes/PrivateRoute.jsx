import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const userData = useSelector((store) => store.AuthReducer.userData);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData !== "") {
      fetch(`${process.env.REACT_APP_API_URL}users/checkrole/${userData.id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: userData.token,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "Welcome Admin") {
            toast.success("Welcome Admin");
            setIsAdmin(true);
          } else {
            toast.error("Not Authorized");
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error("Not Authorized");
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  if (userData == "") {
    toast.warn("Not Logged In");
    navigate("/");
  }

  if (isAdmin) {
    return children;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner variant="dark"></Spinner>{" "}
      <span style={{ marginLeft: "10px" }}>Validating Authorization</span>
    </div>
  );
};

export default PrivateRoute;
