import React, { useState } from "react";
import Hamburger from "./../Hamburger/Hamburger";
import Logo from "./../Logo/Logo";
import Navigation from "./../Navigation/Navigation";
import Phone from "./../Phone/Phone";
import s from "./NavBar.module.css";

function NavBar() {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className={s.navBar}>
      <div className={`${s.container} ${s.container__navbar}`}>
        <Logo />
        <Navigation toggleOpen={toggleOpen} />
        <Phone />
        <Hamburger toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
      </div>
    </div>
  );
}

export default NavBar;
