import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import NewsMonkey from "../images/NewsMonkey.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggler1 = useRef(null);
  const togglerMiddle = useRef(null);
  const toggler2 = useRef(null);

  useEffect(() => {
    if (open) {
      toggler1.current.classList.add("open-icon-1");
      togglerMiddle.current.classList.add("open-icon-middle");
      toggler2.current.classList.add("open-icon-2");
    } else {
      toggler1.current.classList.remove("open-icon-1");
      togglerMiddle.current.classList.remove("open-icon-middle");
      toggler2.current.classList.remove("open-icon-2");
    }
  }, [open]);

  return (
    <>
      <nav id="NavBar" className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <NavLink id="logo" className="navbar-brand" to="/">
            <img id="logoImage" src={NewsMonkey} alt="NewsMonkey" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={(e) => setOpen(!open)}
          >
            <span className="navbar-toggler-icon">
              <div className="toggler" ref={toggler1}></div>
              <div className="toggler" ref={togglerMiddle}></div>
              <div className="toggler" ref={toggler2}></div>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/business"
                >
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/health"
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/science"
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/sports"
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/technology"
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
