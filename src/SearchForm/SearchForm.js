import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
    }
  }

  handleChange = (e) => {
    console.log('handleChange was called');
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit was called');
  };

  render() {
    return (
      <div className="SearchForm">
        <form className="search-form">
          <input
            type="text"
            name="search"
            placeholder="What's troubling you Hun?"
            className="search-input"
            value={this.state.searchValue}
            onChange={this.handleChange}
            aria-label="search"
          />
          <Link to="/results">
            <button
              className="submit-search-btn"
              onClick={this.handleSubmit}
              type="button"
            >
              Lay It On Me!
            </button>
          </Link>
        </form>
      </div>
    );
  }
  
};

export default SearchForm;
