import React from "react";
import logo from "../img/marvel-logo.png";

const clearStorage = () => {
  localStorage.clear();
  window.location.reload();
};

const Header = () => {
  return (
    <header onClick={clearStorage} className="center">
      <img className="" src={logo} />
    </header>
  );
};

export default Header;
