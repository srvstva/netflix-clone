import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="loginpage__gradient"></div>
      <div className="loginpage__container">
        <div className="loginpage__form__control">
          <h2>Sign In</h2>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <div className="controls">
            <div className="control-checkbox">
              <input type="checkbox" name="checkbox" id="" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <h5>Need help?</h5>
          </div>
          <div className="social-login">
            <h5>Login with Facebook</h5>
          </div>
          <div className="footer">
            <h5>
              New to Netflix? <span>Sign up now</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
