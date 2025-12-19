import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        Venkatesh<span>.</span>
      </div>

      {/* Hamburger icon (mobile only) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar rotate1" : "bar"}></span>
        <span className={open ? "bar hide" : "bar"}></span>
        <span className={open ? "bar rotate2" : "bar"}></span>
      </div>

      {/* Desktop + Mobile menu */}
      <ul className={open ? "nav-links nav-open" : "nav-links"}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">What I Do</a></li>
        <li><a href="#projects">Creations</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Let’s Talk</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
