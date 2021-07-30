import React from "react"

import "./LeftPane.css"

function LeftPane() {
  return (
    <div className="LeftPane__container">
      <div className="LeftPane__icons">
        <span className="LeftPane__icon">CC</span>
        <span className="LeftPane__sitename">chat cafe</span>
      </div>
      <div className="LeftPane__profInfo">
        <p className="LeftPane__text1st">Stay connected from the comfort of your home.</p>
        <p className="LeftPane__text2nd">Anywhere. Anytime</p>
      </div>
    </div>
  );
}

export default LeftPane
