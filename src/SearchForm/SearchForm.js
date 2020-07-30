import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    if (this.props.searchedAdvice.length > 0 && this.props.currentPage === 'results') {
      return <Redirect to="/results" />;
    } 
    // else if (this.props.searchedAdvice.length > 0 && this.props.currentPage === 'home') {
    //   return <Redirect to="/" />;
    // } else {
    //   this.setState({ ...this.state, error: true});
    // }

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
          { this.state.error && <p className="results-error">Sorry! Please try searching a different word!</p> }
        </form>
      </div>
    );
  }
}

export default SearchForm;
