import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo-banket.svg";
import logoMob from "./logo-mob.svg";
import s from "./Logo.module.css";

function Logo() {
  return (
    <div className={s.logo}>
      <Link to="/">
        <picture>
          <source srcSet={logoMob} media="(max-width: 768px)" />
          <source srcSet={logo} />
          <img srcSet={logo} alt="Логотип Бункер-42 на Таганке" />
        </picture>
      </Link>
    </div>
  );
}

export default Logo;
