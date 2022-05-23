import React, { useState, useRef, useEffect } from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import NewsMonkey from "../images/NewsMonkey.png";

export default function NavBar() {
  const nav = useRef(null);
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible === true) {
      document.body.style.overflowY = "hidden";
      bar1.current.classList.add("bar1");
      bar2.current.classList.add("hidden-bar");
      bar3.current.classList.add("bar3");
    } else if (visible === false) {
      bar1.current.classList.remove("bar1");
      bar2.current.classList.remove("hidden-bar");
      bar3.current.classList.remove("bar3");
      document.body.style.overflowY = "scroll";
    }
  }, [visible]);

  return (
    <>
      <nav className="menu-container">
        <NavLink id="logo" className="navbar-brand" to="/">
          <img id="logoImage" src={NewsMonkey} alt="NewsMonkey" />
        </NavLink>
        <button
          className="section"
          onClick={() => {
            nav.current.classList.toggle("hidden");
            setVisible(!visible);
          }}
        >
          <div className="bar" ref={bar1}></div>
          <div className="bar" ref={bar2}></div>
          <div className="bar" ref={bar3}></div>
        </button>
      </nav>
      <div id="NavBar" className="container hidden" ref={nav}>
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
    </>
  );
}
