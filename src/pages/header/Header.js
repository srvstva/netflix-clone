import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ showLoginButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      <header className="headerContainer">
        <img
          alt=""
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="header__logo"
        />
        {showLoginButton && (
          <button
            className="header__button"
            onClick={() => history.push("/in/login")}
          >
            Sign In
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
