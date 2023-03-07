import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar nav_color"
      role="navigation"
      aria-label="main navigation"
    >
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/">
            {" "}
            Home{" "}
          </a>
          <a className="navbar-item" href="/about">
            {" "}
            About{" "}
          </a>
          <a className="navbar-item" href="/gallery">
            {" "}
            Gallery{" "}
          </a>
          <a className="navbar-item" href="/contact">
            {" "}
            Contact{" "}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
