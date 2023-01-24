import React from "react";
import { HiSearch } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
import "../styles/NavBarstyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ settext, setrate }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="nav" id={toggle ? "a" : "b"}>
        <div className="nav-options">
          <h1 id={toggle ? "" : "heading"}>NESFLIX</h1>
          <span id={toggle ? "" : "MoviesLight"}>
            <Link style={{ color: "white" }} to="/">
              Movies
            </Link>
          </span>

          <span id={toggle ? "Movies" : "MoviesLight"}>
            <Link style={{ color: "white" }} to="/about">
              About
            </Link>
          </span>
          <span id={toggle ? "Movies" : "MoviesLight"}>
            <Link style={{ color: "white" }} to="/contact">
              Contact
            </Link>
          </span>
        </div>
        <div>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            onChange={(newRating) => setrate(newRating)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search whatever you want"
            onChange={(e) => settext(e.target.value)}
          />
          <HiSearch fontSize={21} color="black" id="search" />
          <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
            <div
              id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
