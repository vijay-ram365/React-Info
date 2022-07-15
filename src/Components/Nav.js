import React from "react";
import Logo from "./react-icon-small.png";

export default function Nav() {
  return (
    <nav>
      <img src={Logo} alt="React Logo" className="nav-logo" />
      <h3 className="nav-title">React Facts</h3>
      <h4 className="nav-subtitle">React Course - Project 1</h4>
    </nav>
  );
}
