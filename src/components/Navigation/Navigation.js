import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation({ toggleOpen }) {
  let navClass = s.nav;

  if (toggleOpen) {
    navClass += ` ${s.isOpen}`;
  }
  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link to="/menu/">Меню</Link>
        </li>
        <li>
          <Link to="/konf">Конференции</Link>
        </li>
        <li>
          <Link to="/news/">События</Link>
        </li>
        <li>
          <Link to="/gallery/">Галерея</Link>
        </li>
        {/* <li>
          <Link to="/team/">Наша команда</Link>
        </li> */}
        <li>
          <Link to="/about/">О нас</Link>
        </li>
        <li>
          <Link to="/contacts/">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
