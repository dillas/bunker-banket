import React from "react";
import "./Hamburger.css";

function Hamburger({ toggleOpen, setToggleOpen }) {
  let hamburgerClass = "hamburger hamburger--squeeze";

  if (toggleOpen) {
    hamburgerClass += " is-active";
  }
  return (
    <button
      onClick={() => setToggleOpen(!toggleOpen)}
      className={hamburgerClass}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

export default Hamburger;
