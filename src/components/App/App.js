import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./../Logo/logo-banket.svg";
import NavBar from "./../NavBar/NavBar";
import s from "./App.module.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className={s.App}>
        <header className={s.AppHeader}>
          <img src={logo} className={s.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={s.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
