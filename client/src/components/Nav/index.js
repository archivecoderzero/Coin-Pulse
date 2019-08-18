import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
      Bit-Pulse <i class="fab fa-bitcoin"></i>
      </a>

      <div id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/login"><button type="button" className="btn btn-dark ">Login</button></a>
                    </li>

                    <li className="nav-item" id="s">
                        <a className="nav-link" href="/signup"><button type="button" className="btn btn-dark">Sign-Up</button></a>
                    </li>
                </ul>
            </div>

    </nav>
  );
}

export default Nav;
