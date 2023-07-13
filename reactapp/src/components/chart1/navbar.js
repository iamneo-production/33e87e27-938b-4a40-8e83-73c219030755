import React, { useState } from "react";
import "../chart1/navbar.css"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Report and Analytics
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Dashboard
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Back
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;