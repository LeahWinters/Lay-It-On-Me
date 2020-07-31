import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { getSearchResults, getRandomAdvice } from '../apiCalls'
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import AdviceContainer from '../AdviceContainer/AdviceContainer';
import RandomAdvice from "../RandomAdvice/RandomAdvice";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedAdvice: [],
      currentPage: 'home',
      error: '',
      randomAdvice: {}
    }
  }

  grabSearchedResults = async (searchValue) => {
    const foundResults = await getSearchResults(searchValue);
    this.setState({searchedAdvice: foundResults.slips, currentPage: 'results'});
  }

  grabRandomAdvice = async () => {
    const randomAdvice = await getRandomAdvice();
    this.setState({...this.state, randomAdvice: randomAdvice, currentPage: 'random'});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
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
                  <AdviceContainer searchedAdvice={this.state.searchedAdvice}/>
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
