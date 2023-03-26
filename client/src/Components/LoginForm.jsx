import React, { useState } from "react";
import "../Styles/login.css";
import Modal from "react-bootstrap/Modal";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
// toast.configure();

const LoginForm = (props) => {
  const [username, setUIser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");

  const handleSignup = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#2b1055";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };

  const signupFunction = () => {
    if (email === "" || pass === "" || username === "") {
      toast.warn("Please fill all fields !");
    } else {
      let payload = {
        username: username,
        email: email,
        password: pass,
        role: "Guest",
        avatar: "https://img.freepik.com/free-icon/user_318-159711.jpg",
      };
      fetch(`${process.env.REACT_APP_API_URL}users/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "already registered") {
            toast.warn("Already registered");
            document.getElementById("login-toggle").style.backgroundColor =
              "#2b1055";
            document.getElementById("login-toggle").style.color = "#fff";
            document.getElementById("signup-toggle").style.backgroundColor =
              "#fff";
            document.getElementById("signup-toggle").style.color = "#222";
            document.getElementById("signup-form").style.display = "none";
            document.getElementById("login-form").style.display = "block";
            setUIser("");
            setEmail("");
            setpass("");
          } else if (res.msg === "registered") {
            toast.success("Registeration success");
            document.getElementById("login-toggle").style.backgroundColor =
              "#2b1055";
            document.getElementById("login-toggle").style.color = "#fff";
            document.getElementById("signup-toggle").style.backgroundColor =
              "#fff";
            document.getElementById("signup-toggle").style.color = "#222";
            document.getElementById("signup-form").style.display = "none";
            document.getElementById("login-form").style.display = "block";
            setUIser("");
            setEmail("");
            setpass("");
          } else {
            toast.error("Registration failed try after some time");
            setUIser("");
            setEmail("");
            setpass("");
          }
        });
    }
  };

  const handleSignin = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#2b1055";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };

  const loginFunction = () => {
    if (email === "" || pass === "") {
      toast.warn("Please fill all fields !");
    } else {
      let payload = {
        email: email,
        password: pass,
      };
      fetch(`${process.env.REACT_APP_API_URL}users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "logged in") {
            toast.success("Login Success");
            setUIser("");
            setEmail("");
            setpass("");
            props.onHide();
          } else if (res.msg === "newuser") {
            toast.error("Not Registered Yet");
            document.getElementById("login-toggle").style.backgroundColor =
              "#fff";
            document.getElementById("login-toggle").style.color = "#222";
            document.getElementById("signup-toggle").style.backgroundColor =
              "#2b1055";
            document.getElementById("signup-toggle").style.color = "#fff";
            document.getElementById("login-form").style.display = "none";
            document.getElementById("signup-form").style.display = "block";
            setUIser("");
            setEmail("");
            setpass("");
          } else {
            toast.error("Wrong Creadentials or New User");
            setUIser("");
            setEmail("");
            setpass("");
          }
        });
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ border: "none", borderBottom: "none" }}
          closeButton
        ></Modal.Header>
        <Modal.Body style={{ padding: "0px 5px 5px 5px" }}>
          <div className="form-modal">
            <div className="form-toggle">
              <button id="login-toggle" onClick={handleSignin}>
                log in
              </button>
              <button id="signup-toggle" onClick={handleSignup}>
                sign up
              </button>
            </div>

            <div id="login-form">
              <form>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter email"
                />
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={loginFunction}
                  className="btn login"
                >
                  login
                </button>
                <hr />
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    fetch(`${process.env.REACT_APP_API_URL}users/googlelogin`, {
                      method: "POST",
                      headers: {
                        "Content-type": "application/json",
                      },
                      body: JSON.stringify({
                        googletoken: credentialResponse.credential,
                      }),
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((res) => {
                        console.log(res);
                      });
                  }}
                  onError={() => {
                    console.log("Login Failed");
                    alert("login failed");
                  }}
                />
                ;
              </form>
            </div>

            <div id="signup-form">
              <form>
                <input
                  type="email"
                  className="emailenter"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => {
                    setUIser(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={pass}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="btn signup"
                  onClick={signupFunction}
                >
                  create account
                </button>
                <p>
                  Clicking <strong>create account</strong> means that you are
                  agree to our terms of services.
                </p>
                <hr />
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer autoClose="1500" style={{zIndex:"111111"}} theme="colored" />
    </>
  );
};

export default LoginForm;
