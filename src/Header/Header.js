import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="title">Solicited Advice</h1>
      </Link>

      <section className="nav-btns">
        <Link to="/random">
          <button
            className="random-btn"
            type="button"
            aria-label="random button"
          >
            Random Advice
          </button>
        </Link>
        <Link to="/my_saved_advice">
          <button
            className="saved-advice-btn"
            type="button"
            aria-label="saved advice button"
          >
            Saved Advice
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Header;
