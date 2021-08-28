import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import NewsMonkey from "../images/NewsMonkey.png";

export default function NavBar() {
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
          >
            <span className="navbar-toggler-icon">
              <div className="toggler"></div>
              <div className="toggler"></div>
              <div className="toggler"></div>
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
