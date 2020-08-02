import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { getSearchResults, getRandomAdvice } from '../apiCalls'
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import AdviceContainer from '../AdviceContainer/AdviceContainer';
import RandomAdvice from "../RandomAdvice/RandomAdvice";
import SavedAdviceContainer from '../SavedAdviceContainer/SavedAdviceContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedAdvice: [],
      currentPage: 'home',
      error: '',
      savedAdvice: []
    }
  }

  grabSearchedResults = async (searchValue) => {
    const foundResults = await getSearchResults(searchValue);
    this.setState({searchedAdvice: foundResults.slips, currentPage: 'results'});
  }

  saveAdvice = (obj) => {
    const adviceToSave = this.state.savedAdvice.push(obj);
    console.log('app', this.state.savedAdvice);
  }

  deleteSavedAdvice = (obj) => {
    const updatedSavedAdvice = this.state.savedAdvice.filter(advice => {
      return advice !== obj
    })
    this.setState({savedAdvice: updatedSavedAdvice})
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route 
              path="/saved_advice"
              component={() => (
                <div className="saved-advice-page">
                  <Header />
                  <SavedAdviceContainer 
                    savedAdvice={ this.state.savedAdvice }
                    deleteSavedAdvice={ this.deleteSavedAdvice }
                  />
                </div>
              )}
            />
            <Route 
              path="/random_advice"
              component={() => (
                <div className="random-advice-page">
                  <Header />
                  <RandomAdvice />
                </div>
              )}
            />
            <Route 
              path="/results"
              component={() => (
                <div className="results-page">
                  <Header />
                  <AdviceContainer 
                    searchedAdvice={ this.state.searchedAdvice }
                    saveAdvice={ this.saveAdvice }
                  />
                </div>
              )}
            />
            <Route
              exact path="/"
              component={() => (
                <div className="search-page">
                  <Header />
                  <SearchForm 
                    grabSearchedResults={this.grabSearchedResults}
                    searchedAdvice={this.state.searchedAdvice}
                    currentPage={this.state.currentPage}
                    error={this.state.error}
                  />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}


export default App;
