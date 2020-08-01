import React, { Component } from "react";
import "./SearchForm.css";
import { Redirect } from "react-router-dom";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      error: false
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.grabSearchedResults(this.state.searchValue);
  };

  render() {
    if (this.props.searchedAdvice === undefined) {
      this.state.error = true
    } else if (this.props.searchedAdvice.length > 0 && this.props.currentPage === 'results') {
      return <Redirect to="/results" />;
    } 

    return (
      <div className="SearchForm">
        <form className="search-form">
          <input
            type="text"
            placeholder="What's troubling you Hun?"
            className="search-input"
            value={this.state.searchValue}
            onChange={this.handleChange}
            aria-label="search"
          />
          <button
            className="submit-search-btn"
            onClick={this.handleSubmit}
            type="button"
          >
            Lay It On Me!
          </button>
          { this.state.error && <div><h2>Sorry, I can't help with that</h2></div> }
        </form>
      </div>
    );
  }
}

export default SearchForm;
