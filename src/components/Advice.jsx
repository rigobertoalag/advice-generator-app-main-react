import React, { useState, useEffect } from "react";
import "./advice.scss";

import divider from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";

const Advice = () => {
  const [advice, setAdvice] = useState();

  const fetchAdvise = async () => {
    await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((advice) => setAdvice(advice));
  };

  useEffect(() => {
    fetchAdvise()
  }, []);

  return (
    <div className="advice">
      {advice ? (
        <>
          <p className="ad-number">A D V I C E # {advice.slip.id}</p>

          <div className="ad-body">
            <p className="ad-body-text">"{advice.slip.advice}"</p>
          </div>

          <div className="divider-container">
            <span className="divider"></span>
            <img src={divider} alt="divider" className="divider-pattern" />
            <span className="divider"></span>
          </div>

          <div className="random-btn" onClick={()=>fetchAdvise()}>
            <img src={dice} alt="dice" className="dice-pattern" />
          </div>
        </>
      ) : (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      )}
    </div>
  );
};

export default Advice;
