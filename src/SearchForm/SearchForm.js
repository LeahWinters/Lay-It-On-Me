import React from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  handleChange = (e) => {};

  handleSubmit = (e) => {};

  return (
    <div className="SearchForm">
      <form className="search-form">
        <input
          type="text"
          name="search"
          placeholder="What's troubling you Hun?"
          className="search-input"
          value={searchInput}
          onChange={this.handleChange}
          aria-label="search"
        />
        <Link to="/results">
          <button
            className="submit-search-btn"
            onClick={this.handleSubmit}
            type="button"
            disabled={!buttonsEnabled}
          >
            Lay It On Me!
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchForm;
