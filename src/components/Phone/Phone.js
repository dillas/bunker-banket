import React from "react";
import s from "./Phone.module.css";

function Phone() {
  return (
    <a className={s.phone} href="tel:+74997030077">
      <span>499 703 00 77</span>
    </a>
  );
}

export default Phone;
