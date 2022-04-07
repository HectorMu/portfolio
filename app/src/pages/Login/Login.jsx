import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div id="login" className="login">
      <div className="login-container">
        <form className="login-form shadowed">
          <h3></h3>
          <input className="form-control" placeholder={"Email"} type="email" />
          <input
            className="form-control"
            placeholder={"Password"}
            type="text"
          />

          <button>
            Log in <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
