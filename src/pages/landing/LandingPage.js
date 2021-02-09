import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const history = useHistory();

  return (
    <div className="landingpage">
      <div className="landingpage__gradient"></div>
      <div className="landingpage__content">
        <div className="landingpage__content__wrapper">
          <h2>Unlimited movies, TV shows and more.</h2>
          <h4>Watch anywhere. Cancel anytime</h4>
          <h6>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
          <div className="landinpage__form_control">
            <input type="text" placeholder="Email address" />
            <button onClick={() => history.push("/in/login")}>
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
