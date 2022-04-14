import React from "react";
import "./advice.scss";

import divider from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";

const Advice = () => {
  return (
    <div className="advice">
      <p className="ad-number">ADVICE #666</p>

      <div className="ad-body">
        <p className="ad-body-text">aqui va el advise</p>
      </div>

      <div className="divider-container">
        <span className="divider"></span>
        <img src={divider} alt="divider" className="divider-pattern" />
        <span className="divider"></span>
      </div>

      <div className="random-btn">
        <img src={dice} alt="dice" className="dice-pattern" />
      </div>
    </div>
  );
};

export default Advice;
