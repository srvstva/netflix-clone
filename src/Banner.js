import React from "react";
import "./Banner.css";

const Banner = ({ title, overview, backdropUrl }) => {
  const truncate = (text, size) => {
    if (text?.length > size) {
      return text.substring(0, size - 1) + " ...";
    } else {
      return text;
    }
  };
  return (
    <div className="banner">
      <img src={backdropUrl} className="banner__image" alt={title}></img>
      <div className="banner__content">
        <h3 className="banner__title">{title}</h3>
        <div className="banner_buttons">
          <button>Play</button>
          <button>MyList</button>
        </div>
        <h4 className="banner__overview">{truncate(overview, 120)}</h4>
      </div>
      <div className="banner__gradient"></div>
    </div>
  );
};

export default Banner;
