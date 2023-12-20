import React from "react";

import "./Chargement.css";

const Chargement = () => {
  const loader = document.querySelector('loader');
  window.addEventListener('load', () => {
    loader.classList.add('foundu-out');
  })
  let Logo = require("./Logo.png");

  return (
    <div className="ChargementPage">
      <div className="EmplacementChargementPage">

      <img className="ChargementImage mt-4" src={Logo} alt="" />
      <div className="Chargement"></div>


        <span className="lettre">B</span>
        <span className="lettre">a</span>
        <span className="lettre">m</span>
        <span className="lettre">s</span>
      </div>
    </div>
  );
};

export default Chargement;
