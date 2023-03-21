import React from "react";
import "../Styles/login.css";
import Modal from "react-bootstrap/Modal";

const LoginForm = (props) => {
  //   const [signup, setSignup] = useState(true);
  //   const [login, setlogin] = useState(false);

  const handleSignup = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#2b1055";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };

  const handleSignin = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#2b1055";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };

  return (
    <>
      <Modal
        {...props} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{border:"none",borderBottom:"none"}} closeButton></Modal.Header>
        <Modal.Body style={{padding:"0px 5px 5px 5px"}}>
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
                <input type="text" placeholder="Enter email or username" />
                <input type="password" placeholder="Enter password" />
                <button type="button" className="btn login">
                  login
                </button>
                <hr />
              </form>
            </div>

            <div id="signup-form">
              <form>
                <input
                  type="email"
                  className="emailenter"
                  placeholder="Enter your email"
                />
                <input type="text" placeholder="Choose username" />
                <input type="password" placeholder="Create password" />
                <button type="button" className="btn signup">
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
    </>
  );
};

export default LoginForm;
