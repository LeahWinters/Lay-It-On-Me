import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import AdviceContainer from '../AdviceContainer/AdviceContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentAdviceSearched: '',
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route 
              path="/results"
              component={() => (
                <div className="results-page">
                  <Header />
                  <AdviceContainer />
                </div>
              )}
            />
            <Route
              exact path="/"
              component={() => (
                <div className="search-page">
                  <Header />
                  <SearchForm />
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
