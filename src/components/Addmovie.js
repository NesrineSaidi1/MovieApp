import React from "react";
import "./addmovie.css";
import { useState } from "react";
function Addmovie({ films, setfilms }) {
  const [Show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [newmovie, setnewmovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  const handleAdd = () => {
    setfilms([...films, newmovie]);
  };

  return (
    <div>
      <div className="wrapper">
        <a href="#demo-modal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </a>
      </div>
      {Show && (
        <div id="demo-modal" className="modal">
          <div className="modal__content">
            <h1>Add a movie</h1>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="fname">Movie name:</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) =>
                    setnewmovie({ ...newmovie, name: e.target.value })
                  }
                />
                <br />
                <label htmlFor="fname">Movie description :</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) =>
                    setnewmovie({ ...newmovie, description: e.target.value })
                  }
                />
                <br />
                <label htmlFor="lname">Movie poster:</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  onChange={(e) =>
                    setnewmovie({ ...newmovie, posterurl: e.target.value })
                  }
                />
                <br />
                <label htmlFor="fname">Rating:</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) =>
                    setnewmovie({ ...newmovie, rating: e.target.value })
                  }
                />
                <br />
                <br />

                <button
                  onClick={() => {
                    {
                      handleAdd();
                      handleClose();
                    }
                  }}
                >
                  Add Movie
                </button>
              </form>
            </div>
            <a href="#" className="modal__close">
              ×
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Addmovie;
