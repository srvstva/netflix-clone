import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const history = useHistory();

  const handleScroll = () => {
    if (window.scrollY) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar">
      <header
        className={`navbar__container ${scrolling && "navbar--scrolling"}`}
      >
        <img
          alt=""
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="navbar__logo"
          onClick={() => history.push("/")}
        />
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="navbar__avatar"
          onClick={() => history.push("/in")}
        />
      </header>
    </div>
  );
};

export default Navbar;
