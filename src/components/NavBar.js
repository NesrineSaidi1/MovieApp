import React from "react";
import { HiSearch } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
import "../styles/NavBarstyle.css";
import { useState } from "react";

function NavBar({ settext, setrate }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="nav" id={toggle ? "a" : "b"}>
        <div className="nav-options">
          <h1 id={toggle ? "" : "heading"}>NESFLIX</h1>
          <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
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
      <div className="cover-movie">
        <video className="elmovie" src="cover.mp4" autoPlay muted loop />
        <h3>Avatar</h3>
        <button>Play</button>
      </div>
      <div className="movies-container"></div>
    </div>
  );
}

export default NavBar;
